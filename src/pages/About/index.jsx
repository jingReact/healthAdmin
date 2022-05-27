import React, { Component, useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { AlertOutlined, ApiOutlined, AppstoreAddOutlined, RedditOutlined } from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux';
import './index.css'
import { allAbout } from "../../api/login";
import Echarts1 from './echarts1'
import Echarts2 from './echarts2'
import Echarts3 from './echarts3'
export const TestContext = React.createContext()
function About() {
    const [v, setv] = useState(0)
    const [m, setm] = useState(0)
    const [unm, serNum] = useState({ num: {} })
    const dispatch = useDispatch()
    useSelector(state => {
        console.log(state, 'state1123')
    })
    const getDoub = useMemo(() => {
        console.log('getDoub调用了')
        return m * 2
    }, [m])
    useEffect(() => {
        allAbout().then(res => {
            serNum(res.data)
            console.log(res, 4)
        })
    }, [])

    const refs1 = useRef()
    console.log(refs1, 'ref1')
    const hanc1 = useCallback(() => {
        setv(v + 1)
        dispatch({
            type: 'SWITCH_MEUN',
            menuName: '修改后的MEUN'
        })
    }, [v])
    const hanc2 = useCallback(() => {
        setv(m + 1)
    }, [m])

    // function getDoub(){
    //     console.log('getDoub调用了')
    //     return v*2
    // }
    return (
        <div>
            <header className='header'>
                <div className="cont">
                    <button onClick={hanc1}>加++{v}</button>
                    {/* <button onClick={hanc2}>加++{m}</button> */}
                    <div ref={refs1}>医疗机构总数<div className="num_span">{unm.num1} 家{getDoub}</div></div>
                    <div>
                        <AlertOutlined className='AlertOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构床位总数<div className="num_span">{unm.num2} 家</div></div>
                    <div>
                        <ApiOutlined className='ApiOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构人员编制总数<div className="num_span">{unm.num3} 家</div></div>
                    <div>
                        <AppstoreAddOutlined className='AppstoreAddOutlined' />
                    </div>
                </div>
                <div className="cont">
                    <div>医疗机构人员在编人数<div className="num_span">{unm.num4} 家</div></div>
                    <div>
                        <RedditOutlined className='RedditOutlined' />
                    </div>
                </div>
            </header>
            <div className='actionc_diyljg'>
                <div className='center_ech'>
                    <TestContext.Provider value={v}>
                        <Echarts1 />
                    </TestContext.Provider>
                </div>
                <div className='center_ech  ech2'>
                    <Echarts2 />
                </div>
            </div>
            <footer className='footer'>
                <div className='center_ech'>
                    <Echarts3 />
                </div>
            </footer>
        </div>
    );
}

export default About