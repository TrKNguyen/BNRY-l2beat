import React from 'react'

import {
  Chart,
  Footer,
  FooterProps,
  Header,
  NavbarProps,
} from '../../../components'
import { About } from '../../../components/About'
import { ScalingNavigationTabs } from '../../../components/navigation-tabs/ScalingNavigationTabs'
import { OtherSites } from '../../../components/OtherSites'
import { Page } from '../../../components/Page'
import { ScalingTvlView, ScalingTvlViewProps } from './ScalingTvlView'

export interface TvlPageProps {
  tvl: string
  sevenDayChange: string
  tvlEndpoint: string
  tvlView: ScalingTvlViewProps
  navbar: NavbarProps
  footer: FooterProps
  showActivity: boolean
}

export function ScalingTvlPage(props: TvlPageProps) {
  return (
    <Page navbar={props.navbar}>
      <ScalingNavigationTabs showActivity={props.showActivity} selected="tvl" />
      <main>
        <Header
          title="Value locked"
          tvl={props.tvl}
          tvlWeeklyChange={props.sevenDayChange}
        />
        <Chart tvlEndpoint={props.tvlEndpoint} />
        <ScalingTvlView {...props.tvlView} />
        <OtherSites />
        <About />
      </main>
      <Footer {...props.footer} />
    </Page>
  )
}
