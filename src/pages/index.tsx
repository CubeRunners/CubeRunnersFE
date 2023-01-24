import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import tw from "twin.macro"
import Sidebar from "@layout/sidebar"

const Test = tw.div`text-2xl`

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Sidebar></Sidebar>
    )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>