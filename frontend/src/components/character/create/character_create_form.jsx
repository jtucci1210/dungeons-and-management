import React from 'react';
import StatRoller from './stat_roller';
import splashImg from '../../homepage/splash_image.jpg'
import RaceAndClass from './race_and_class';
import '../../../stylesheet/character_create_form.css';
import { fullRace } from '../../../util/race_util';
import { fullClass } from '../../../util/class_util';
import {allSkills, halfelfAbilityScores} from '../../../util/skill_util';
import { strengthSkills, dexteritySkills, intelligenceSkills, wisdomSkills, charismaSkills } from '../../../util/skill_util';
import { withRouter } from 'react-router-dom';
import { healthLevelOne, mod } from '../../../util/game_math_util';

class CharacterCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...this.props}
        this.updateState = this.updateState.bind(this)
        this.updateFinalStats = this.updateFinalStats.bind(this)
        this.handleNext = this.handleNext.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)
        this.handleHalfElfCheckbox = this.handleHalfElfCheckbox.bind(this)
        this.handleHalfElfAbilityCheckbox = this.handleHalfElfAbilityCheckbox.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateState(slice) {
        this.setState(slice)
    }

    updateFinalStats(finalRace) {
        let allBonusAbilities = Object.keys(fullRace[finalRace].abilityScores)
        let temp = this.state.abilities
        Object.values(this.state.abilities).forEach( ability =>
           {
               if (allBonusAbilities.includes(ability.title)) {
                    ability.value = parseInt(ability.value) + parseInt(this.props.fullRace[finalRace].abilityScores[ability.title])
                
            }
        }

        )

        this.setState({
            abilities: temp
        })

    }

    handleChange(field) {
        return (e) => {
            this.setState(
                { [field]: e.target.value }
            )
        }
    }

    handleNext() {
        this.setState(
            { nextClicked: true }
        )
    }

    handleSubmit() {

        let conScore = this.state.abilities[2].value
        let conMod = mod(conScore, 2)
        let hd = fullClass[this.state.class].hitDice

        let maxHealth = this.state.finalRace === "hillDwarf" ? healthLevelOne(hd, conMod) + 1 : healthLevelOne(hd, conMod)

        let abilityObj = {}
        this.state.abilities.forEach(ability =>
            abilityObj[ability.title] = ability.value
            )

        if (this.state.finalRace === "halfelf") {
            this.state.halfelfAbilities.forEach( ability =>
                abilityObj[ability] += 1
                )
        }

        let bonusSkills = fullRace[this.state.finalRace].skillProficiencies

        let halfelfSkills = this.state.halfelfSkills

        let allSkills;

        if (bonusSkills) {
            allSkills = this.state.selectedSkills.concat(bonusSkills).concat(halfelfSkills)
        } else {
            allSkills = this.state.selectedSkills.concat(halfelfSkills)
        }
        
        let characterObj = {
            user: this.props.currentUser,
            name: this.state.characterName,
            race: this.state.finalRace,
            charClass: this.state.class,
            armorType: "noArmor",
            level: 1,
            maxHp: maxHealth,
            currentHp: maxHealth,
            abilities: abilityObj,
            skills: allSkills
        };

        this.props.createCharacter(characterObj)
            .then(result => this.props.history.push(`/home`))

    }

    handleCheckbox(skill) {

        
        if (this.state.selectedSkills.includes(skill)) {
                
            this.state.selectedSkills.splice(this.state.selectedSkills.indexOf(skill), 1)

                this.setState(
                    {
                        selectedSkills: this.state.selectedSkills
                    }
                )
        } else if (this.state.selectedSkills.length < this.state.numSkills) {

            let addNewSkill = this.state.selectedSkills.concat(skill)

            this.setState(
                {
                    selectedSkills: addNewSkill
                }
            )
        }

    }

    handleHalfElfCheckbox(skill) {


        if (this.state.halfelfSkills.includes(skill)) {

            this.state.halfelfSkills.splice(this.state.halfelfSkills.indexOf(skill), 1)

            this.setState(
                {
                    halfelfSkills: this.state.halfelfSkills
                }
            )
        } else if (this.state.halfelfSkills.length < 2) {

            let addNewSkill = this.state.halfelfSkills.concat(skill)

            this.setState(
                {
                    halfelfSkills: addNewSkill
                }
            )
        }

    }

    handleHalfElfAbilityCheckbox(ability) {


        if (this.state.halfelfAbilities.includes(ability)) {

            this.state.halfelfAbilities.splice(this.state.halfelfAbilities.indexOf(ability), 1)

            this.setState(
                {
                    halfelfAbilities: this.state.halfelfAbilities
                }
            )
        } else if (this.state.halfelfAbilities.length < 2) {

            let addNewAbility = this.state.halfelfAbilities.concat(ability)

            this.setState(
                {
                    halfelfAbilities: addNewAbility
                }
            )
        }

    }

    renderFinalStats() {
        if (this.props.order.includes("")) return "please select abilities for each of your rolls"
       return Object.values(this.state.abilities).map((ability, idx) =>
            <div className="final-stat-box" key={idx}>
                <h1>{ability.title}</h1>
                <div>{ability.value}</div>
            </div>
        )
    }


    render() {

        return (
          <div className="main-page-background-img">
            <img src={splashImg} alt="background" className="splash-image" />
            <div className="character-create-form-container">
              <div className="character-create-form">
                <div className="character-name">
                  <input
                    type="text"
                    placeholder="character name"
                    onChange={this.handleChange("characterName")}
                  />
                </div>
                {!this.state.nextClicked ? (
                  <div className="stat-roller-component">
                    <StatRoller
                      abilities={this.props.abilities}
                      rolls={this.props.rolls}
                      order={this.props.order}
                      statsRolled={this.props.statsRolled}
                      updateState={this.updateState}
                    />
                  </div>
                ) : (
                  ""
                )}
                <div className="race-and-class-component">
                  {this.state.statsRolled && !this.state.nextClicked ? (
                    <div className="race-and-class-box">
                      <RaceAndClass
                        raceSelected={this.props.raceSelected}
                        classSelected={this.props.classSelected}
                        subraceSelected={this.props.subraceSelected}
                        races={this.props.races}
                        subraces={this.props.subraces}
                        race={this.props.race}
                        class={this.props.class}
                        fullRace={this.props.fullRace}
                        classes={this.props.classes}
                        updateState={this.updateState}
                        abilities={this.props.abilities}
                        updateFinalStats={this.updateFinalStats}
                      />
                      <div className="final-stats-container">
                        <h1>FINAL STATS</h1>
                        <div className="stats-list">
                          {this.renderFinalStats()}
                        </div>
                      </div>
                      {(this.state.raceSelected &&
                        this.state.classSelected &&
                        this.state.subraceSelected &&
                        this.state.hasSubraces &&
                        !this.state.order.includes("")) ||
                      (this.state.raceSelected &&
                        this.state.classSelected &&
                        !this.state.hasSubraces &&
                        !this.state.order.includes("")) ? (
                        <button
                          className="next-button"
                          onClick={this.handleNext}
                        >
                          Next
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {this.state.nextClicked ? (
                    <div className="char-create-pg-2">
                      <div className="char-create-pg-2-num-skills">
                        Please select {this.state.numSkills} skills below
                      </div>
                      <div className="skill-selection-container">
                        <div className="skill-type">
                          Strength:
                          <div className="choose-skills">
                            {fullClass[this.state.class].skillList.map(
                              (skill, idx) => {
                                if (strengthSkills.includes(skill)) {
                                  return (
                                    <label key={idx}>
                                      <input
                                        type="checkbox"
                                        name={skill}
                                        onChange={() =>
                                          this.handleCheckbox(skill)
                                        }
                                        disabled={
                                          this.state.selectedSkills.length ===
                                            this.state.numSkills &&
                                          !this.state.selectedSkills.includes(
                                            skill
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                      {skill}
                                    </label>
                                  );
                                }
                              }
                            )}
                          </div>
                        </div>
                        <div className="skill-type">
                          Dexterity:
                          <div className="choose-skills">
                            {fullClass[this.state.class].skillList.map(
                              (skill, idx) => {
                                if (dexteritySkills.includes(skill)) {
                                  return (
                                    <label key={idx}>
                                      <input
                                        type="checkbox"
                                        name={skill}
                                        onChange={() =>
                                          this.handleCheckbox(skill)
                                        }
                                        disabled={
                                          this.state.selectedSkills.length ===
                                            this.state.numSkills &&
                                          !this.state.selectedSkills.includes(
                                            skill
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                      {skill}
                                    </label>
                                  );
                                }
                              }
                            )}
                          </div>
                        </div>
                        <div className="skill-type">
                          Intelligence:
                          <div className="choose-skills">
                            {fullClass[this.state.class].skillList.map(
                              (skill, idx) => {
                                if (intelligenceSkills.includes(skill)) {
                                  return (
                                    <label key={idx}>
                                      <input
                                        type="checkbox"
                                        name={skill}
                                        onChange={() =>
                                          this.handleCheckbox(skill)
                                        }
                                        disabled={
                                          this.state.selectedSkills.length ===
                                            this.state.numSkills &&
                                          !this.state.selectedSkills.includes(
                                            skill
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                      {skill}
                                    </label>
                                  );
                                }
                              }
                            )}
                          </div>
                        </div>
                        <div className="skill-type">
                          Wisdom:
                          <div className="choose-skills">
                            {fullClass[this.state.class].skillList.map(
                              (skill, idx) => {
                                if (wisdomSkills.includes(skill)) {
                                  return (
                                    <label key={idx}>
                                      <input
                                        type="checkbox"
                                        name={skill}
                                        onChange={() =>
                                          this.handleCheckbox(skill)
                                        }
                                        disabled={
                                          this.state.selectedSkills.length ===
                                            this.state.numSkills &&
                                          !this.state.selectedSkills.includes(
                                            skill
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                      {skill}
                                    </label>
                                  );
                                }
                              }
                            )}
                          </div>
                        </div>
                        <div className="skill-type">
                          Charisma:
                          <div className="choose-skills">
                            {fullClass[this.state.class].skillList.map(
                              (skill, idx) => {
                                if (charismaSkills.includes(skill)) {
                                  return (
                                    <label key={idx}>
                                      <input
                                        type="checkbox"
                                        name={skill}
                                        onChange={() =>
                                          this.handleCheckbox(skill)
                                        }
                                        disabled={
                                          this.state.selectedSkills.length ===
                                            this.state.numSkills &&
                                          !this.state.selectedSkills.includes(
                                            skill
                                          )
                                            ? true
                                            : false
                                        }
                                      />
                                      {skill}
                                    </label>
                                  );
                                }
                              }
                            )}
                          </div>
                        </div>
                      </div>
                      <div>
                        {this.state.selectedSkills.length ===
                          this.state.numSkills &&
                        this.state.finalRace !== "halfelf" ? (
                          <button
                            className="create-char-btn"
                            onClick={this.handleSubmit}
                          >
                            Create Character
                          </button>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div>
                  {this.state.selectedSkills.length === this.state.numSkills &&
                  this.state.finalRace === "halfelf" ? (
                    <div className="half-elf-div">
                      <h1>Choose your 2 bonus skills for being a Halfelf</h1>
                      <div className="halfelf-extra-skills">
                        <div className="skill-type">
                          Strength:
                          <div className="choose-skills">
                            {allSkills.map((skill, idx) => {
                              if (
                                strengthSkills.includes(skill) &&
                                !this.state.selectedSkills.includes(skill)
                              ) {
                                return (
                                  <label key={idx}>
                                    <input
                                      type="checkbox"
                                      name={skill}
                                      onChange={() =>
                                        this.handleHalfElfCheckbox(skill)
                                      }
                                      disabled={
                                        this.state.halfelfSkills.length === 2 &&
                                        !this.state.halfelfSkills.includes(
                                          skill
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    {skill}
                                  </label>
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className="skill-type">
                          Dexterity:
                          <div className="choose-skills">
                            {allSkills.map((skill, idx) => {
                              if (
                                dexteritySkills.includes(skill) &&
                                !this.state.selectedSkills.includes(skill)
                              ) {
                                return (
                                  <label key={idx}>
                                    <input
                                      type="checkbox"
                                      name={skill}
                                      onChange={() =>
                                        this.handleHalfElfCheckbox(skill)
                                      }
                                      disabled={
                                        this.state.halfelfSkills.length === 2 &&
                                        !this.state.halfelfSkills.includes(
                                          skill
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    {skill}
                                  </label>
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className="skill-type">
                          Intelligence:
                          <div className="choose-skills">
                            {allSkills.map((skill, idx) => {
                              if (
                                intelligenceSkills.includes(skill) &&
                                !this.state.selectedSkills.includes(skill)
                              ) {
                                return (
                                  <label key={idx}>
                                    <input
                                      type="checkbox"
                                      name={skill}
                                      onChange={() =>
                                        this.handleHalfElfCheckbox(skill)
                                      }
                                      disabled={
                                        this.state.halfelfSkills.length === 2 &&
                                        !this.state.halfelfSkills.includes(
                                          skill
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    {skill}
                                  </label>
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className="skill-type">
                          Wisdom:
                          <div className="choose-skills">
                            {allSkills.map((skill, idx) => {
                              if (
                                wisdomSkills.includes(skill) &&
                                !this.state.selectedSkills.includes(skill)
                              ) {
                                return (
                                  <label key={idx}>
                                    <input
                                      type="checkbox"
                                      name={skill}
                                      onChange={() =>
                                        this.handleHalfElfCheckbox(skill)
                                      }
                                      disabled={
                                        this.state.halfelfSkills.length === 2 &&
                                        !this.state.halfelfSkills.includes(
                                          skill
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    {skill}
                                  </label>
                                );
                              }
                            })}
                          </div>
                        </div>
                        <div className="skill-type">
                          Charisma:
                          <div className="choose-skills">
                            {allSkills.map((skill, idx) => {
                              if (
                                charismaSkills.includes(skill) &&
                                !this.state.selectedSkills.includes(skill)
                              ) {
                                return (
                                  <label key={idx}>
                                    <input
                                      type="checkbox"
                                      name={skill}
                                      onChange={() =>
                                        this.handleHalfElfCheckbox(skill)
                                      }
                                      disabled={
                                        this.state.halfelfSkills.length === 2 &&
                                        !this.state.halfelfSkills.includes(
                                          skill
                                        )
                                          ? true
                                          : false
                                      }
                                    />
                                    {skill}
                                  </label>
                                );
                              }
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="halfelf-ability-selection">
                        <h1>
                          Choose 2 abilities to increase by +1 for being a Halfelf
                        </h1>
                        <div className="halfelf-choose-abilities">
                          {halfelfAbilityScores.map((ability, idx) => {
                            return (
                              <label key={idx}>
                                <input
                                  type="checkbox"
                                  name={ability}
                                  onChange={() =>
                                    this.handleHalfElfAbilityCheckbox(ability)
                                  }
                                  disabled={
                                    this.state.halfelfAbilities.length === 2 &&
                                    !this.state.halfelfAbilities.includes(
                                      ability
                                    )
                                      ? true
                                      : false
                                  }
                                />
                                {ability}
                              </label>
                            );
                          })}
                        </div>
                      </div>
                      {this.state.halfelfSkills.length === 2 &&
                      this.state.halfelfAbilities.length == 2 ? (
                        <button
                          className="create-char-btn"
                           onClick={this.handleSubmit}
                        >
                          Create Halfelf
                        </button>
                      ) : (
                        ""
                      )}
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default withRouter(CharacterCreateForm);
