import {useNavigate} from 'react-router-dom'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'
function NewProject() {

    const Navigate = useNavigate()
    function createPost(project) {
        
        // initialize cost and services
        project.cost = 0
        project.services = []

         fetch('http://localhost:5000/projects',{
            method:'POST',
            headers: {
                'Content-Type':'application/json',
            },   
            body: JSON.stringify(project),     
         })
         .then((resp) => resp.json())
         .then((data)=> {
            console.log(data)
            //redirect
            Navigate('/projects',{state:{message:'A new project has been created'}})
         })
         .catch((err)=> console.log(err))         
    }


    return (
        <div className={styles.newProject_container}>
            <h1>Create a new project</h1>
            <p>Crie seu projeto para depois adcionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Create Project"/>
        </div>
    )
}
export default NewProject