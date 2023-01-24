import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import tw from 'twin.macro'

const SidebarContainer = tw.div`bg-red-700`

const Sidebar: React.FC<{}> = (props) => {
    return (
        <>
            <SidebarContainer>Testing!</SidebarContainer>
        </>
    )
}

export default Sidebar