import React from 'react'
import LeftNavigation from './_components/left-navigation'
import RightNavigation from './_components/right-navigation '

const TopNavigation = () => {
    return (
        <nav className='flex fixed top-0 left-0 right-0 z-50 backdrop-blur-sm justify-between items-center max-w-410 mx-auto py-3 px-12'>
            <LeftNavigation />
            <RightNavigation />
        </nav>
    )
}

export default TopNavigation