import React from 'react';
import styles from './Result.module.css'



const Result = () =>{

    return(
        <div>
            <div className={styles.header}>
                <h1>View Exam Results</h1>
                <form>
                    <input type='text' name='course' placeholder='Enter Course Code' required/>
                    <input type='text' name='course' placeholder='Enter Course Code' required/>
                    <button>Show Result</button>
                </form>
            </div>
            <div className={styles.tableContainer}>
                <table>
                    <thead>
                        <tr>
                            <td>S/N</td>
                            <td>Students</td>
                            <td>Scores</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Francis Ogbonna</td>
                            <td>76%</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Francis Ogbonna</td>
                            <td>76%</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Francis Ogbonna</td>
                            <td>76%</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Francis Ogbonna</td>
                            <td>76%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Result;