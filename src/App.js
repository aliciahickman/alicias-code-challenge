import React, { useState } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import styled from '@emotion/styled'
import { Theme } from './css/Theme.js' 
import TopBar from './components/TopBar.js'
import MainList from './_pages/MainList.js'
import Details from './_pages/Details'

const App = () => {
	const jobData = [
		{ 
			id: 1, 
			title: 'Product Manager', 
			location: 'Austin, TX',
			date: '10/04/20',
			sponsorship: 'free',
			status: 'open'
		},
		{ 
			id: 2, 
			title: 'CEO', 
			location: 'Austin, TX',
			date: '12/30/20',
			sponsorship: 'sponsored',
			status: 'paused'
		},
		{ 
			id: 3, 
			title: 'Software Engineer', 
			location: 'Seattle, WA',
			date: '11/18/20',
			sponsorship: 'free',
			status: 'closed' 
		},
	]

	const date = new Date(Date.now()).toLocaleString().split(',')[0]

	const emptyJob = { 
		id: null, 
		title: '', 
		location: '',
		date: date,
		sponsorship: 'free',
		status: 'open',
	}

	const [ jobs, setJobs ] = useState(jobData)
	const [ currentJob, setCurrentJob ] = useState(emptyJob)
	const [ isEditing, setEditing ] = useState(false)
	const history = useHistory()

	const handleSubmit = (id, updatedJob) => {
		if (isEditing) {
			setEditing(false)
			setJobs(jobs.map(job => (job.id === id ? updatedJob : job)))
			setCurrentJob(emptyJob)
		}
		else { 
			updatedJob.id = jobs.length + 1
			setJobs([ ...jobs, updatedJob ])
		}
		history.push("/list")
	}

	const handleEditClick = job => {
		setEditing(true)
		setCurrentJob({ 
			id: job.id, 
			title: job.title, 
			location: job.location,
			date: job.date,
			sponsorship: job.sponsorship,
			status: job.status
		 })
		 history.push("/details")
	}

	const handleAddClick = () => {
		setEditing(false)
		history.push("/details")
	}

	const handleCancel = () => {
		setEditing(false)
		setCurrentJob(emptyJob)
		history.push("/list")
	}
	
	return (
		<Div>
			<TopBar></TopBar>
			<Wrapper>
				<Switch>
					<Route exact path={["/", "/list"]}>
						<MainList 
							jobs={jobs} 
							handleEditClick={handleEditClick} 
							handleAddClick={handleAddClick} />
					</Route>
					<Route exact path="/details" >
						<Details
							isEditing={isEditing}
							currentJob={currentJob}
							handleSubmit={handleSubmit} 
							handleCancel={handleCancel}/>
					</Route>
				</Switch>
			</Wrapper>
		</Div>
	)
}

const Wrapper = styled.div`
	max-width: ${Theme.wrapperMaxWidth};
	margin: ${Theme.wrapperMargin};
	width: ${Theme.wrapperWidth};
`
const Div = styled.div`
	background: ${Theme.offwhite};
	font-family: ${Theme.Helvetica};
`

export default App
