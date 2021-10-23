import React from 'react'

const Container = (props) => {
    return (
        <div className="w-11/12 md:w-10/12 lg:w-8/12 p-6 bg-white rounded pt-10">
            {props.children}
        </div>
    )
}

export default Container
