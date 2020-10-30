import React from 'react'
import { useLDflexValue } from '@solid/react'
import { GithubOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import data from "@solid/query-ldflex"
const { Meta } = Card

export function Access(props) {

  function clickedOnItems(uri) {
    setSelectedItem(uri)
    console.log('selectedItem is ', selectedItem);
  }

  const uri = `[${props.uri}]`
  const [selectedItem, setSelectedItem] = React.useState('');
  const mode = useLDflexValue(uri + '.acl_mode') || 'unknown'
  // console.log('mode', mode);
  // const name = useLDflexValue(uri + '.schema_name') || 'unknown'
  // const about = useLDflexValue(uri + '.schema_about') || 'unknown'
  // const image = useLDflexValue(uri + '.schema_image') || 'unknown'
  // const codeRepository = useLDflexValue(uri + '.schema_codeRepository') || 'unknown'
  // const url = useLDflexValue(uri + '.schema_url') || 'unknown'
  // const rdftype = useLDflexValue(uri + `['${props.context.rdftype}']`) || 'unknown'
  // const actions = [
  //   <a property={props.context.codeRepository} href={codeRepository.value}>
  //     <GithubOutlined />
  //   </a>
  // ]
  // if (url !== 'unknown')
  //   actions.push(
  //     <a property={props.context.url} href={url.value}>
  //       Try it
  //           </a>
  //   )
  // const isLoading = (image === 'unknown' || name === 'unknown' || about === 'unknown' || codeRepository === 'unknown' || rdftype === 'unknown')
  return (
    <Card
      onClick={() => clickedOnItems(uri)}
    // loading={isLoading}
    // typeof={rdftype.value}
    // resource={props.uri}
    // className="shadowEffect"
    // style={{ heigth: '100%', minHeigth: '100%' }}
    // cover={
    //   <img
    //     alt=""
    //     property={props.context.image}
    //     src={image.value}
    //   />
    // }
    // actions={actions}
    >
      <Meta
        title={<span property={props.context.mode}>{uri}</span>}
      // description={<span property={props.context.about}>{about.value}</span>}
      />
    </Card>
  )

}
