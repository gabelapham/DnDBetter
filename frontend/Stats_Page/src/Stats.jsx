import { useState } from 'react'
import './Stats.css'
import './index.css'

function Stats() {
    const [level, setLevel] = useState(1)

    const [strength, setStrength] = useState(10)
    const [strengthMod, setStrengthMod] = useState(0)
    const [strength_st_pb, setStrPB] = useState(false)
    function setStrFunc(e) {
        setStrPB(e.target.checked)
    }

    const [dexterity, setDexterity] = useState(10)
    const [dexterityMod, setDexterityMod] = useState(0)
    const [dexterity_st_pb, setDexPB] = useState(false)
    function setDexFunc(e) {
        setDexPB(e.target.checked)
    }

    const [constitution, setConstitution] = useState(10)
    const [constitutionMod, setConstitutionMod] = useState(0)
    const [constitution_st_pb, setConPB] = useState(false)
    function setConFunc(e) {
        setConPB(e.target.checked)
    }

    const [intelligence, setIntelligence] = useState(10)
    const [intelligenceMod, setIntelligenceMod] = useState(0)
    const [intelligence_st_pb, setIntPB] = useState(false)
    function setIntFunc(e) {
        setIntPB(e.target.checked)
    }

    const [wisdom, setWisdom] = useState(10)
    const [wisdomMod, setWisdomMod] = useState(0)
    const [wisdom_st_pb, setWisPB] = useState(false)
    function setWisFunc(e) {
        setWisPB(e.target.checked)
    }

    const [charisma, setCharisma] = useState(10)
    const [charismaMod, setCharismaMod] = useState(0)
    const [charisma_st_pb, setChaPB] = useState(false)
    function setChaFunc(e) {
        setChaPB(e.target.checked)
    }

    const [pb, setPb] = useState(2)

    function pbFunc(lvl) {
        setLevel(lvl)
        switch(lvl) {
            case "1":
            case "2":
            case "3":
            case "4":
                setPb(2)
                break
            case "5":
            case "6":
            case "7":
            case "8":
                setPb(3)
                break
            case "9":
            case "10":
            case "11":
            case "12":
                setPb(4)
                break
            case "13":
            case "14":
            case "15":
            case "16":
                setPb(5)
                break
            case "17":
            case "18":
            case "19":
            case "20":
                setPb(6)
                break
            default:
                break
        }
    }

    function Mod(e) {
        switch(e) {
            case 1:
                return(-5)
            case 2:
            case 3:
                return(-4)
            case 4:
            case 5:
                return(-3)
            case 6:
            case 7:
                return(-2)
            case 8:
            case 9:
                return(-1)
            case 10:
            case 11:
                return(0)
            case 12:
            case 13:
                return(+1)
            case 14:
            case 15:
                return(+2)
            case 16:
            case 17:
                return(+3)
            case 18:
            case 19:
                return (+4)
            case 20:
                return (+5)
            default:
                break
        }
    }

    function setStrengthFunc(e) {
        if (e > 20) {
            setStrength(20)
            return;
        } else if (e < 1) {
            setStrength(1)
            return;
        } else {
            setStrength(e)
        }
        setStrengthMod(Mod(e))
        return;
    }
    function setDexterityFunc(e) {
        if (e > 20) {
            setDexterity(20)
            return;
        } else if (e < 1) {
            setDexterity(1)
            return;
        } else {
            setDexterity(e)
        }
        setDexterityMod(Mod(e))
        return;
    }
    function setConstitutionFunc(e) {
        if (e > 20) {
            setConstitution(20)
            return;
        } else if (e < 1) {
            setConstitution(1)
            return;
        } else {
            setConstitution(e)
        }
        setConstitutionMod(Mod(e))
        return;
    }
    function setIntelligenceFunc(e) {
        if (e > 20) {
            setIntelligence(20)
            return;
        } else if (e < 1) {
            setIntelligence(1)
            return;
        } else {
            setIntelligence(e)
        }
        setIntelligenceMod(Mod(e))
        return;
    }
    function setWisdomFunc(e) {
        if (e > 20) {
            setWisdom(20)
            return;
        } else if (e < 1) {
            setWisdom(1)
            return;
        } else {
            setWisdom(e)
        }
        setWisdomMod(Mod(e))
        return;
    }
    function setCharismaFunc(e) {
        if (e > 20) {
            setCharisma(20)
            return;
        } else if (e < 1) {
            setCharisma(1)
            return;
        } else {
            setCharisma(e)
        }
        setCharismaMod(Mod(e))
        return;
    }

    const [acrobatics_pb, setAcrobaticsPB] = useState(false)
    function setAcrobaticsFunc(e) {
        setAcrobaticsPB(e.target.checked)
    }
    const [animal_handling_pb, setAnimalHandlingPB] = useState(false)
    function setAnimalHandlingFunc(e) {
        setAnimalHandlingPB(e.target.checked)
    }
    const [arcana_pb, setArcanaPB] = useState(false)
    function setArcanaFunc(e) {
        setArcanaPB(e.target.checked)
    }
    const [athletics_pb, setAthleticsPB] = useState(false)
    function setAthleticsFunc(e) {
        setAthleticsPB(e.target.checked)
    }
    const [deception_pb, setDeceptionPB] = useState(false)
    function setDeceptionFunc(e) {
        setDeceptionPB(e.target.checked)
    }
    const [history_pb, setHistoryPB] = useState(false)
    function setHistoryFunc(e) {
        setHistoryPB(e.target.checked)
    }
    const [insight_pb, setInsightPB] = useState(false)
    function setInsightFunc(e) {
        setInsightPB(e.target.checked)
    }
    const [intimidation_pb, setIntimidationPB] = useState(false)
    function setIntimidationFunc(e) {
        setIntimidationPB(e.target.checked)
    }
    const [investigation_pb, setInvestigationPB] = useState(false)
    function setInvestigationFunc(e) {
        setInvestigationPB(e.target.checked)
    }
    const [medicine_pb, setMedicinePB] = useState(false)
    function setMedicineFunc(e) {
        setMedicinePB(e.target.checked)
    }
    const [nature_pb, setNaturePB] = useState(false)
    function setNatureFunc(e) {
        setNaturePB(e.target.checked)
    }
    const [perception_pb, setPerceptionPB] = useState(false)
    function setPerceptionFunc(e) {
        setPerceptionPB(e.target.checked)
    }
    const [performance_pb, setPerformancePB] = useState(false)
    function setPerformanceFunc(e) {
        setPerformancePB(e.target.checked)
    }
    const [persuasion_pb, setPersuasionPB] = useState(false)
    function setPersuasionFunc(e) {
        setPersuasionPB(e.target.checked)
    }
    const [religion_pb, setReligionPB] = useState(false)
    function setReligionFunc(e) {
        setReligionPB(e.target.checked)
    }
    const [sleight_of_hand_pb, setSleightOfHandPB] = useState(false)
    function setSleightOfHandFunc(e) {
        setSleightOfHandPB(e.target.checked)
    }
    const [stealth_pb, setStealthPB] = useState(false)
    function setStealthFunc(e) {
        setStealthPB(e.target.checked)
    }
    const [survival_pb, setSurvivalPB] = useState(false)
    function setSurvivalFunc(e) {
        setSurvivalPB(e.target.checked)
    }

return(
    <>
    <div id="core">
        <div>
        <label name="Player Stats" />
            <select id="level_select" onChange={() => pbFunc(level_select.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
            </select>
        </div>
        <div>
        <label name="Prof Bonus" />
            <p id="pb">
                +{pb}
            </p>
        </div>
        {/* CORE STATS */}
        <div>
        <label name="STR Stats">
            <div>
            <button id="str_inc" checked={strength} onClick={() => setStrengthFunc(strength + 1)}>
                +
            </button>
            </div>
            <div>
            <button id="str_dec" checked={strength} onClick={() => setStrengthFunc(strength - 1)}>
                -
            </button>
            </div>
            <div>
            <p id="str">
                {strength}
            </p>
            </div>
            <div>
            <p id="str_mod">
                {strengthMod}
            </p>
            </div>
        </label>
        </div>
        <label name="DEX Stats">
            <button id="dex_inc" checked={dexterity} onClick={() => setDexterityFunc(dexterity + 1)}>
                +
            </button>
            <button id="dex_dec" checked={dexterity} onClick={() => setDexterityFunc(dexterity - 1)}>
                -
            </button>
            <p id="dex">
                {dexterity}
            </p>
            <p id="dex_mod">
                {dexterityMod}
            </p>
        </label>
        <label name="CON Stats">
            <button id="con_inc" checked={constitution} onClick={() => setConstitutionFunc(constitution + 1)}>
                +
            </button>
            <button id="con_dec" checked={constitution} onClick={() => setConstitutionFunc(constitution - 1)}>
                -
            </button>
            <p id="con">
                {constitution}
            </p>
            <p id="con_mod">
                {constitutionMod}
            </p>
        </label>
        <label name="INT Stats">
            <button id="int_inc" checked={intelligence} onClick={() => setIntelligenceFunc(intelligence + 1)}>
                +
            </button>
            <button id="int_dec" checked={intelligence} onClick={() => setIntelligenceFunc(intelligence - 1)}>
                -
            </button>
            <p id="int">
                {intelligence}
            </p>
            <p id="int_mod">
                {intelligenceMod}
            </p>
        </label>
        <label name="WIS Stats">
            <button id="wis_inc" checked={wisdom} onClick={() => setWisdomFunc(wisdom + 1)}>
                +
            </button>
            <button id="wis_dec" checked={wisdom} onClick={() => setWisdomFunc(wisdom - 1)}>
                -
            </button>
            <p id="wis">
                {wisdom}
            </p>
            <p id="wis_mod">
                {wisdomMod}
            </p>
        </label>
        <label name="CHA Stats">
            <button id="cha_inc" checked={charisma} onClick={() => setCharismaFunc(charisma + 1)}>
                +
            </button>
            <button id="cha_dec" checked={charisma} onClick={() => setCharismaFunc(charisma - 1)}>
                -
            </button>
            <p id="cha">
                {charisma}
            </p>
            <p id="cha_mod">
                {charismaMod}
            </p> 
        </label>
    {/* SAVING THROWS + PB CHECKBOXES */}
        <div>
        <p id="str_st">
            {strengthMod+(strength_st_pb*pb)}
        </p>
        </div>
        <div>
            <input type="checkbox" id="st_pb_str" checked={strength_st_pb} onChange={setStrFunc}/>
        </div>
        <div>
        <p id="dex_st">
            {dexterityMod+(dexterity_st_pb*pb)}
        </p>
        </div>
        <div>
        <input type="checkbox" id="st_pb_dex" checked={dexterity_st_pb} onChange={setDexFunc}/>
        </div>
        <div>
        <p id="con_st">
            {constitutionMod+(constitution_st_pb*pb)}
        </p>
        </div>
        <div>
        <input type="checkbox" id="st_pb_con" checked={constitution_st_pb} onChange={setConFunc}/>
        </div>
        <div>
        <p id="int_st">
            {intelligenceMod+(intelligence_st_pb*pb)}
        </p>
        </div>
        <div>
        <input type="checkbox" id="st_pb_int" checked={intelligence_st_pb} onChange={setIntFunc}/>
        </div>
        <div>
        <p id="wis_st">
            {wisdomMod+(wisdom_st_pb*pb)}
        </p>
        </div>
        <div>
        <input type="checkbox" id="st_pb_wis" checked={wisdom_st_pb} onChange={setWisFunc}/>
        </div>
        <div>
        <p id="cha_st">
            {charismaMod+(charisma_st_pb*pb)}
        </p>
        </div>
        <div>
        <input type="checkbox" id="st_pb_cha" checked={charisma_st_pb} onChange={setChaFunc}/>
        </div>

        {/* SKILLS */}
            <p id="acrobatics">
                {dexterityMod+(acrobatics_pb*pb)}
            </p>
            <input type="checkbox" id="acrobatics_pb" checked={acrobatics_pb} onChange={setAcrobaticsFunc}/>

            <p id="animal_handling">
                {wisdomMod+(animal_handling_pb*pb)}
            </p>
            <input type="checkbox" id="animal_handling_pb" checked={animal_handling_pb} onChange={setAnimalHandlingFunc}/>

            <p id="arcana">
                {intelligenceMod+(arcana_pb*pb)}
            </p>
            <input type="checkbox" id="arcana_pb" checked={arcana_pb} onChange={setArcanaFunc}/>

            <p id="athletics">
                {strengthMod+(athletics_pb*pb)}
            </p>
            <input type="checkbox" id="athletics_pb" checked={athletics_pb} onChange={setAthleticsFunc}/>

            <p id="deception">
                {charismaMod+(deception_pb*pb)}
            </p>
            <input type="checkbox" id="deception_pb" checked={deception_pb} onChange={setDeceptionFunc}/>

            <p id="history">
                {intelligenceMod+(history_pb*pb)}
            </p>
            <input type="checkbox" id="history_pb" checked={history_pb} onChange={setHistoryFunc}/>

            <p id="insight">
                {wisdomMod+(insight_pb*pb)}
            </p>
            <input type="checkbox" id="insight_pb" checked={insight_pb} onChange={setInsightFunc}/>

            <p id="intimidation">
                {charismaMod+(intimidation_pb*pb)}
            </p>
            <input type="checkbox" id="intimidation_pb" checked={intimidation_pb} onChange={setIntimidationFunc}/>

            <p id="investigation">
                {intelligenceMod+(investigation_pb*pb)}
            </p>
            <input type="checkbox" id="investigation_pb" checked={investigation_pb} onChange={setInvestigationFunc}/>

            <p id="medicine">
                {wisdomMod+(medicine_pb*pb)}
            </p>
            <input type="checkbox" id="medicine_pb" checked={medicine_pb} onChange={setMedicineFunc}/>

            <p id="nature">
                {intelligenceMod+(nature_pb*pb)}
            </p>
            <input type="checkbox" id="nature_pb" checked={nature_pb} onChange={setNatureFunc}/>

            <p id="perception">
                {wisdomMod+(perception_pb*pb)}
            </p>
            <input type="checkbox" id="perception_pb" checked={perception_pb} onChange={setPerceptionFunc}/>

            <p id="performance">
                {charismaMod+(performance_pb*pb)}
            </p>
            <input type="checkbox" id="performance_pb" checked={performance_pb} onChange={setPerformanceFunc}/>

            <p id="persuasion">
                {charismaMod+(persuasion_pb*pb)}
            </p>
            <input type="checkbox" id="persuasion_pb" checked={persuasion_pb} onChange={setPersuasionFunc}/>

            <p id="religion">
                {intelligenceMod+(religion_pb*pb)}
            </p>
            <input type="checkbox" id="religion_pb" checked={religion_pb} onChange={setReligionFunc}/>

            <p id="sleight_of_hand">
                {dexterityMod+(sleight_of_hand_pb*pb)}
            </p>
            <input type="checkbox" id="sleight_of_hand_pb" checked={sleight_of_hand_pb} onChange={setSleightOfHandFunc}/>

            <p id="stealth">
                {dexterityMod+(stealth_pb*pb)}
            </p>
            <input type="checkbox" id="stealth_pb" checked={stealth_pb} onChange={setStealthFunc}/>

            <p id="survival">
                {wisdomMod+(survival_pb*pb)}
            </p>
            <input type="checkbox" id="survival_pb" checked={survival_pb} onChange={setSurvivalFunc}/>

        {/* OTHER SKILLS */}
            <p id="passive_perception">
                {10+wisdomMod+pb}
            </p>
            <p id="initiative">
                {dexterityMod}
            </p>
        </div>
    </>
)
}

export default Stats