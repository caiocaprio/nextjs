import React from 'react'
import PropTypes from 'prop-types'
import { useRouter } from 'next/router'


const products = props => {
    const router = useRouter();
    return (
        <div>
            {router.query.slug}
        </div>
    )
}

products.propTypes = {

}

export default products
