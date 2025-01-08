import React, {useState, useEffect, useRef} from 'react'
import Link from 'next/link'
import SectionSubtitle from './SectionSubtitle'
import styles from '../styles/Form.module.css'
import {notify} from '../notify'

const Form = () =>{

	const [form, setForm] = useState({
		name:'',
		email:'',
		message:'',

	})

	function onSubmit(e){
		e.preventDefault()

		// console.log(form)

		const formdata =  new FormData()
		formdata.append('name', form.name)
		formdata.append('email', form.email)
		formdata.append('message', form.message)

		fetch('http://localhost/portfolio/insert.php', {method: 'POST', body: formdata})
		.then(e => e.json())
		.then((type, data) => notify({
			type: 'error',
			message: 'Thanks for reaching out, your message has been sent'
		}))
		document.querySelector('#form').reset()
	}

	return(

		<>

			<form className={styles.form} id='form' method='POST' onSubmit={onSubmit}>
				<div className={styles.user_box}>
					<input value={form.name} onChange={(e) => {setForm({...form, name: e.target.value})}} type='text' required name='name' />
					<label>
						Name <i className='bi-person-fill ml-1'></i>
					</label>
					{/*{

						notify({
							type: 'error',
							message: 'name is too short'
						})
					}*/}
				</div>

				<div className={styles.user_box}>
					<input type='email' required name='email' value={form.email} onChange={(e) => {setForm({...form, email: e.target.value})}} />
					<label>
						Email address <i className='bi-envelope-open ml-1'></i>
					</label>
				</div>


				<div className={styles.user_box}>
					<textarea type='text' rows={5} required name='message' resize='none' value={form.message} onChange={(e) => {setForm({...form, message: e.target.value})}}></textarea>
					<label>
						Message <i className='bi-bell-fill ml-1'></i>
					</label>
				</div>

				<button href='' className={styles.btn_form} type='submit' name='submitdata'>
					<span></span>
					<span></span>
					<span></span>
					<span></span>

					Send <i className='bi-arrow-right'></i>
				</button>
			</form>

		</>
	)
}

export default Form