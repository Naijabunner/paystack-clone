import { Button } from "@/components/ui/button"
import { NavDropdownCountry } from "../nav-countries"
import SmallNavigationItem, { SmallNavigationItemProps } from "../small-nav-item"
import LargeNavigationItem, { LargeNavigationItemProps } from "../large-nav-item"


const NAV_ITEMS: (
    | ({ type: 'small' } & SmallNavigationItemProps)
    | ({ type: 'large' } & LargeNavigationItemProps)
)[] = [
        {
            type: 'small',
            title: 'Developers',
            links: [
                { label: 'Overview' },
                { label: 'Documentation' },
                { label: 'Integrations' },
                { label: 'Status Page' }
            ]
        },
        {
            type: 'small',
            title: 'Support',
            links: [
                { label: 'Quick Help' },
                { label: 'Contact Us' },
                { label: 'Why was I debited?' },
            ]
        },
        {
            type: 'small',
            title: 'Login',
            href: '/login'
        }
    ]


const RightNavigation = () => {
    return (
        <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
                {NAV_ITEMS.map((item, index) => {
                    if (item.type === 'small') {
                        return <SmallNavigationItem key={index} title={item.title} links={item.links} href={item.href} />
                    } else {
                        return (
                            <LargeNavigationItem
                                key={index}
                                title={item.title}
                                features={item.features}
                                categories={item.categories}
                            />
                        )
                    }
                })}
            </ul>
            <Button className="  bg-[#3BB75E] text-white text-[15px] font-semibold">Create a free account</Button>
            <NavDropdownCountry />

        </div>
    )
}

export default RightNavigation