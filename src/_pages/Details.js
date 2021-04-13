import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { Theme } from '../css/Theme.js' 
import TextInput from '../components/TextInput'
import Select from '../components/Select'

const Details = ({isEditing, currentJob, handleSubmit, handleCancel}) => {

	const [ job, setJob ] = useState(currentJob)

	const submitJob = event => {
		if (job.title && job.location) {
			handleSubmit(job.id, job)
			event.preventDefault()
		}
		// TODO add better form validation and error states
	}

	const handleChange = (name, value) => {
    setJob( prevJob => ({
        ...prevJob,
        [name] : value
    }))
	}

	return (
		<Modal>
			<ModalSegment>
				{!isEditing ?
				<>
					<h3>Add a new job</h3>
					<p>Fill out the information for your new job listing.</p>
				</>
				: 
				<>
					<h3>Edit job</h3>
					<p>Edit the information for your job listing.</p>	
				</>
				}
			</ModalSegment>
			<ModalSegment>
				<Form>
					<TextInput 
						label="Job title" 
						note="What is name of the role?"
						value={job.title}
						placeholder="e.g. Software Engineer"
						onChange={e => handleChange('title', e.target.value)}>
					</TextInput>
					<TextInput 
						label="Location" 
						note="Where is this job?"
						value={job.location}
						placeholder="e.g. Chicago, IL"
						onChange={e => handleChange('location', e.target.value)}>
					</TextInput>
					<Select 
						label="Sponsorship" 
						note="Do you want to promote this job?"
						options= {{value1:'free', value2:'sponsored'}} 
						value={job.sponsorship}
						onChange={e => handleChange('sponsorship', e.target.value)}>
					</Select>
					<Select 
						label="Status" 
						note="Are you ready to make this job public?"
						options= {{value1:'open', value2:'closed', value3:'paused'}} 
						value={job.status}
						onChange={e => handleChange('status', e.target.value)}>
					</Select>
				</Form>
			</ModalSegment>
			<ModalSegment>
					<SecondaryButton onClick={handleCancel}>Cancel</SecondaryButton>
					<SubmitButton type="submit" value={!isEditing ? "Add job" : "Save"} onClick={submitJob}/>
			</ModalSegment>
		</Modal>
	)
}

const Modal = styled.div`
	background: white;
	border: 1px solid ${Theme.borderColor};
	border-radius: 10px;
	margin-bottom: 4rem;
`
const ModalSegment = styled.div`
	padding: 2rem;
	border-bottom: 1px solid ${Theme.borderColor};
	&:first-of-type {
		font-family: ${Theme.Noto};
		> * {
			margin: 0;
		}
		h3 {
			margin-bottom: .4rem;
			font-size: 1.25rem;
		}
	}
	&:last-of-type {
		border: 0;
		text-align: right;
	}
`
const SubmitButton = styled.input`
	border: 0;
	border-radius: ${Theme.buttonRadius};
	background: ${Theme.blue};
	color: white;
	padding: .875rem;
	font-weight: bold;
	cursor: pointer;
	&:hover {
		background-color: ${Theme.bluedark}
	}
	&:active {
		outline: 0;
		box-shadow: 0 0 0 1px ${Theme.blue};
	}
`
const SecondaryButton = styled.button`
	padding: .8rem;
	color: ${Theme.blue};
	background: white;
	border: 1px solid ${Theme.graylight};
	font-weight: bold;
	border-radius: ${Theme.buttonRadius};
	cursor: pointer;
	margin-right:20px;
	&:hover {
		background-color: ${Theme.offwhite}
	}
	&:active {
		outline: 0;
		box-shadow: 0 0 0 1px ${Theme.blue};
	}
`
const Form = styled.form`
	max-width: 300px;
	> * {
		width: 100%;
		box-sizing: border-box;
	}
`

export default Details
