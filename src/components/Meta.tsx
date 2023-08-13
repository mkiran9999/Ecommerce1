// @ts-ignore
import {Helmet} from "react-helmet";
import React from 'react'

const Meta = (props : {title : string}) => {
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
    </Helmet>
  )
}

export default Meta