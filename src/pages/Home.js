import React from 'react'
import Layout from '../components/Layout'
import { sendNotification } from '../api/sendNotification'
import { Row, Col, Typography, Space, Divider } from 'antd'
import { TwitterOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons'
import Accesslist from '../components/Accesslist';
import { useLDflexValue, useLDflexList, LogoutButton } from '@solid/react';
import { context as jsonLdContext } from '../api/solid'
import { useWebId } from '../hooks/useWebId';
const context = jsonLdContext["@context"]
const { Paragraph } = Typography
const { Title } = Typography

export default function Home(props) {
    const webId = useWebId()
    // const receiverWebId = "https://rsaniei.inrupt.net/input/"
    const uri = `[${webId}]`
    const name = useLDflexValue(uri + '.schema$name') || 'unknown'
    const companyName = useLDflexValue(uri + '.vcard$fn') || 'unknown'
    // const inbox = useLDflexValue(uri + '.ldp$inbox') || 'unknown'
    const description = useLDflexValue(uri + '.schema_description') || 'unknown'
    const image = useLDflexValue(uri + '.schema_image') || 'unknown'
    // const email = useLDflexValue(uri + '.schema_email') || 'unknown'
    // const hasEmail = useLDflexValue(uri + '.vcard:hasEmail') || 'unknown'
    // const currentProject = useLDflexList(uri + '[foaf:currentProject]') || 'unknown'
    const aclist = useLDflexList(uri + '[acl:trustedApp]' + '[acl:origin]') || 'unknownam';
    // console.log('hasEmail:', currentProject);
    // console.log('aclist:', aclist);

    return (
        <Layout>
            <span resource={webId} typeof='http://schema.org/Person'>
                <Row align="middle" justify="center">
                    <Col xs={24} md={8} align="center">
                        <Space size="small" direction="vertical">
                            <img className="imgHome" property={context.image} src={image.value} alt="" />
                        </Space>
                    </Col>
                    <Col xs={24} md={12}>
                        <Title level={2}>
                            <span property={context.name}>
                                {/* change later to name */}
                                {companyName.value}
                            </span></Title>
                        <span property={context.description}>
                            <Paragraph style={{ textAlign: 'justify' }}>
                                {description.value}
                            </Paragraph>
                        </span>
                    </Col>
                </Row>
                <Divider></Divider>
                <Row>
                    <Col>
                        <Title level={2}>Access List:</Title>
                    </Col>
                </Row>
                <Accesslist data={aclist} context={context} webid={uri} ></Accesslist>
                <Divider></Divider>
            </span>
            <Row className="footer has-text-left">
                <LogoutButton className="button" />
                <button onClick={sendNotification}>Send Request to Access Data</button>
            </Row>
        </Layout>

    )
}
