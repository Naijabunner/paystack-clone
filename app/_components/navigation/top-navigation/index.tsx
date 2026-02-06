import React from 'react'
import LeftNavigation from './_components/left-navigation'
import RightNavigation from './_components/right-navigation '

const TopNavigation = () => {
    return (
        <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xs">
<div className=" flex justify-center items-center bg-foreground text-white">
    <p className='px-[16px] py-[10px] text-sm'>
                    🚀 Register your business and get a corporate bank account — fast
                </p>
</div>
        <nav className='flex  justify-between items-center max-w-410 mx-auto py-3 px-12'>
            <LeftNavigation />
            <RightNavigation />
        </nav>
        </div>
    )
}

export default TopNavigation