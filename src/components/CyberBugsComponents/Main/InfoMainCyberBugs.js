import React from 'react'


export default function InfoMainCyberBugs(props) {
    const { projectName, members } = props.projectDetail;
    const renderAvatarMember = (member) => {
        return members?.map((item, index) => {
            return <div key={index} className="avatar">
                <img src={item.avatar} alt={item.name} />
            </div>
        })
    }
    return (
        <>
            <h4>{projectName}</h4>
            <div className="info" style={{ display: 'flex' }}>
                <div className="search-block">
                    <input className="search" />
                    <i className="fa fa-search" />
                </div>
                <div className="avatar-group" style={{ display: 'flex' }}>
                    {renderAvatarMember()}
                </div>
                <div style={{ marginLeft: 20 }} className="text">Only My Issues</div>
                <div style={{ marginLeft: 20 }} className="text">Recently Updated</div>
            </div>
        </>
    )
}
