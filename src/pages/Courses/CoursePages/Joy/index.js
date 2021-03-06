import React from 'react'
import Navbar from '../../../../components/Navbar'
import Footer from '../../../../components/Footer'
import '../styles.css'
import { Container, ContainerInner } from '../../styles'

import AnonymousProfile from "../../teacherheadshots/anonymous-profile.png"

const CoursePage = () => {
    return(
        <div>
            <Navbar/>
            <Container>
                <ContainerInner>
                  <h1>Where and Why is Joy?</h1>
                  <p>
                  This course will seek to answer, from a variety of philosophical and scientific standpoints, why and how humans experience joy, with an emphasis on finding ways to increase joyful moments while stuck in quarantine.
                  </p>
                  <p style={{clear: 'right'}}>
                  <b>Class Date + Time: </b>TR, 5/26-6/4, 5-6:15pm EDT
                  </p>
                  <p>
                  <img src={AnonymousProfile} class="img-left"/>
                  <b>Taught by: </b>Abby McElroy, Harvard University '23<br/>
                  <b>Teacher Bio: </b>Abby McElroy is a member of Harvard College’s class of 2023. She is excited to share her knowledge of human emotion in her course!
                  </p>
                  <h1>Register for this course!</h1>
                    <iframe
                  title="form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdEci1eOpQ8IvYSFCxsgQOXfKL5LpJhZRWvfBLrrzAPrgyuZw/viewform?embedded=true"
                  width="100%"
                  height="500"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0">Loading…</iframe>
              </ContainerInner>
            </Container>
            <Footer/>
        </div>
    )
}

export default CoursePage
