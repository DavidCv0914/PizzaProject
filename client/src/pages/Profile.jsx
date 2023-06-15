import React from 'react'
import { Nav } from '../components/Layouts/header/Nav'
import { Banner } from '../components/Layouts/profile/banner/Banner'
import { InfoUser } from '../components/Layouts/profile/info-user/InfoUser'

export const Profile = () => {
  return (
    <>
        <Nav/>
        <Banner/>
        <InfoUser/>
    </>
  )
}
