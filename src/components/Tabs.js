import React, {useState} from 'react'

function Tabs(props) {
    const [focusTab, setfocusTab] = useState("");

    console.log(props.tabs);
    
    const handleClick = (tabObj) => {
        // console.log(tabObj);  
        console.log(tabObj.content);
        setfocusTab(tabObj.content);
    }

    return (
        <div>
            <ul>
                {
                    props.tabs.map((tab, i) => {
                        return <li key={i} onClick={() => handleClick(tab)}>{tab.title}</li>
                    })
                }
            </ul>
            <p>{ focusTab || "This is the content for Tab 1"}</p>

        </div>
    )
}

export default Tabs