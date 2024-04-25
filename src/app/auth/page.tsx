import { Metadata } from 'next'
import React from 'react'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { Auth } from './Auth'

export const metadata: Metadata = {
	title: 'Auth Page',
	...NO_INDEX_PAGE
}

export default function AuthPage() {
	return <Auth />
}
