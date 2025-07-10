import "../styles/SkillCard.css";

function SkillCard({skill}){
    return(
        <div className="skill-card" key={skill.name}>
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <p className="skill-name">{skill.name}</p>
        </div>
    )
}

export default SkillCard;
