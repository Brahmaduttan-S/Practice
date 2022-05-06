import './NewItem.css'

const courseDetails = (props) => {

    return (

        <div>
            {/* <ul className="listname">Other Frameworks
                <li><a href="https://reactnative.dev/" target="_blank">React Native</a></li>
                <li><a href="https://angularjs.org/" target="_blank">Angualar JS</a></li>
                <li><a href="https://vuejs.org/" target="_blank">Vue JS</a></li>
                <li><a href="https://nextjs.org/" target="_blank">Next JS</a></li>
            </ul> */}
            <div className="courseContainer">
                <div>{props.courseID}</div>
                <div className="courseDescription">
                    <h2 >{props.courseTITLE}</h2>
                    <div className="courseAmount">₹ {props.courseAMOUNT}</div>
                </div>
            </div>
        </div>
    )
}

export default courseDetails;