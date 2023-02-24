import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'
import styles from './Project.module.css'



function Project() {
    const { id } = useParams()
    const [project, setProject] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [message, setMessage] = useState()
    const [type, setType] = useState()
    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    setProject(data)
                })
                .catch((err) => console.log)
        }, 300)

    }, [id])
    function editPost(project) {
        //buget validation
        if (project.budget < project.cost) {
            setMessage("The budget cannot be less than the cost of the project")
            setType('error')
            return false
        }
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp=> resp.json())
        .then((data)=>{
            setProject(data)
            setShowProjectForm(false)
            setMessage("The project was updated sucessfuly")
            setType('sucess')
        })
        .catch((err)=> console.log(err))
    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)

    }

    return (
        <>
            {project.name ? (
                <div className={styles.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message}/>}
                        <div className={styles.details_container}>

                            <h1>Procject : {project.name}</h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? "Edit" : "Close"}
                            </button>

                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Category:</span> {project.category.name}
                                    </p>
                                    <p>
                                        <span>Remain Budget:</span> ${project.budget}
                                    </p>
                                    <p>
                                        <span>Budget:</span> ${project.cost}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjectForm
                                        handleSubmit={editPost}
                                        btnText="Save"
                                        projectData={project}

                                    />
                                </div>
                            )}




                        </div>

                    </Container>
                </div>
            ) : (
                <Loading />

            )}
        </>
    )
}
export default Project
