import React from 'react'
import { Row, Col, Typography } from 'antd'
const { Text } = Typography
export default function Footer(props) {
    return (
        <Row justify="center">
            <Col style={{ textAlign: 'center' }}>
                <Text type="secondary">This website looks very simple but it's powered by many technologies of the <a href="https://www.w3.org/standards/semanticweb/">Semantic web.</a> and <a href="https://solidproject.org/">Solid.</a> </Text>
            </Col>
        </Row>
    )
}
