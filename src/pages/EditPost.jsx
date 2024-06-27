import React from 'react'
import { useState, useEffect } from 'react'
import { Container , PostForm } from '../components'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'

function EditPost() {
    const [post, setPosts] = useState([])
    const {slug} = useParams()
    const navigate = useNavigate()

    useEffect(()=> {
        if(slug) {
            appwriteService.getPost(slug).then((posts)=> {
                if (posts) {
                    setPosts(posts) 
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate ])
  return post? (
    <div className='py-8 '>
        <Container>
            <PostForm/>
        </Container>
    </div>
  ) :  null
}

export default EditPost