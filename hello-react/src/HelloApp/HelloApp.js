import React, { Fragment } from 'react';
import { Row, Col, Input, Button, Form, FormGroup } from 'reactstrap';
import { has } from 'lodash';
import { ContainerWrapper } from './style.js'
import { getGithubRepo, getGithubFollower } from '../api/index';




const initial = {
    username: "",
    data: null,
    followersList: []
}

class HelloApp extends React.Component {

    constructor(props) {
        super(props)
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = initial;
    }


    onFormSubmit = async (e) => {
        e.preventDefault();
        this.getGithubUserDetail(this.state.username)


    }

    getGithubUserDetail = async (username) => {
        const response = await getGithubRepo(username);

        if (response.status === 200) {
            const responseFollowerList = await getGithubFollower(response.data.followers_url);
            if (responseFollowerList.status === 200) {
                this.setState({
                    data: response.data,
                    followersList: responseFollowerList.data
                });
            } else {
                this.setState({
                    data: response.data,
                });
            }

        }
    }


    renderFollowerList() {
        const { followersList } = this.state;

        if (followersList.length > 0) {
            return followersList.map(follower => {
                return (
                    <Row className="repoRow">
                        <Col xs="3"></Col>
                        <Col xs="4">
                            <img alt="avatar" className="imageFollower" src={follower.avatar_url} />
                            <p className="follower-name" onClick={() => this.getGithubUserDetail(follower.login)}>{follower.login}</p>
                        </Col>
                        <Col xs="5">
                            <a href={`${follower.html_url}?tab=repositories`}> Repository</a>
                        </Col>
                    </Row>)
            })
        }

    }


    render() {
        const { data } = this.state;

        return (
            <Fragment>
                <ContainerWrapper>
                    <Form className="form" onSubmit={this.onFormSubmit}>
                        <Row>
                            <Col xs="10">
                                <FormGroup>
                                    <Input onChange={e => this.setState({ username: e.target.value })} value={this.state.username} type="text" className="ีrepository" placeholder="Input github username" />
                                </FormGroup>

                            </Col>
                            <Col xs="2">
                                <Button type="submit">OK</Button>
                            </Col>
                        </Row>
                    </Form>

                    <div className="wrapContent">
                        <Row className="avatarRow">
                            <Col className="image-box" xs="3">
                                <img alt="avatar" className="imgAvartar" src={has(data, 'avatar_url') ? data.avatar_url : "Not Found"} />
                            </Col>
                            <Col xs="auto">
                                <h3>{has(data, 'login') ? data.login : "please input feild username"}</h3>
                                <h5>Bio:</h5>
                                <p>{has(data, 'bio') && data.bio !== null ? data.bio : "no bio"}</p>
                            </Col>

                        </Row>
                        <Row>
                            <Col xs="3"></Col>
                            <Col xs="4">
                                <p>Followers:</p>

                            </Col>
                            <Col xs="5">
                                <p>Repository</p>

                            </Col>
                        </Row>


                        {this.renderFollowerList()}
                    </div>
                </ContainerWrapper>


            </Fragment>

        )
    }
}

export default HelloApp