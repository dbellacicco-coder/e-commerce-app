import React from 'react'
import { Spinner } from 'react-bootstrap'

const Loading = () => {
    return (
        <div>
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
        </div>
    )
}

export default Loading
