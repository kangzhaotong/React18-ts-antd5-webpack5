/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-27 14:38:34
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2022-12-27 09:40:57
 */
import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import 'echarts-gl'
import { geoCoordMap, alirl } from './map'
import china from './china.json'
import './index.less'
interface depType {
  id: number
  name: string
  pid: number
  children?: any
}
const Detail = () => {
  const init = () => {
    echarts.registerMap('china', china)
    const dom: any = document.getElementById('chinaMap')
    let myChart = echarts.init(dom)
    const option = {
      title: {
        text: '全国行政区划3D地图',
        x: 'center',
        top: '20',
        textStyle: {
          color: '#000',
          fontSize: 24,
        },
      },
      tooltip: {
        show: true,
        // formatter:(params)=>{
        //   let data = "测试1:"+params.name + "<br/>"+"值:"+ params.value[2]+"<br/>"+"地理坐标:[" + params.value[0]+","+params.value[1] +"]";
        //   return data;
        // },
      },
      geo3D: {
        map: 'china',
        roam: true,
        boxWidth: 150,
        environment: new echarts.graphic.LinearGradient(
          0,
          0,
          0,
          1,
          [
            {
              offset: 0,
              color: '#00aaff', // 天空颜色
            },
            {
              offset: 0.7,
              color: '#998866', // 地面颜色
            },
            {
              offset: 1,
              color: '#998866', // 地面颜色
            },
          ],
          false,
        ),
        boxHeight: 30,
        itemStyle: {
          areaColor: 'rgb(5,101,123)',
          color: 'rgb(5,101,123,.8)',
          opacity: 0.8,
          borderWidth: 0.8,
          borderColor: 'rgb(62,215,213)',
        },
        label: {
          show: true,
          textStyle: {
            color: '#fff', // 地图初始化区域字体颜色
            fontSize: 16,
            opacity: 1,
            backgroundColor: 'rgba(0,0,0,0)',
            // backgroundColor: 'rgba(53,171,199,0)'
          },
        },
        emphasis: {
          // 当鼠标放上去  地区区域是否显示名称
          label: {
            show: true,
            textStyle: {
              color: '#fff',
              fontSize: 16,
              backgroundColor: 'rgba(0,23,11,0)',
            },
          },
        },
        // shading: 'lambert',
        light: {
          // 光照阴影
          main: {
            color: '#fff', // 光照颜色
            intensity: 1.2, // 光照强度
            shadowQuality: 'high', // 阴影亮度
            shadow: false, // 是否显示阴影
            alpha: 55,
            beta: 10,
          },
          ambient: {
            intensity: 0.3,
          },
        },
        realisticMaterial: {
          detailTexture: '#fff', // 纹理贴图
          textureTiling: 1, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
          roughness: 0, // 材质粗糙度，0完全光滑，1完全粗糙
          metalness: 0, // 0材质是非金属 ，1金属
          roughnessAdjust: 0,
        },
        viewControl: {
          alpha: 30,
        },
      },
      series: [
        // 画线
        {
          type: 'lines3D',

          coordinateSystem: 'geo3D',

          effect: {
            show: true,
            trailWidth: 4,
            trailOpacity: 0.5,
            trailLength: 0.3,
            constantSpeed: 5,
          },

          blendMode: 'lighter',

          lineStyle: {
            width: 0.2,
            opacity: 0.05,
          },

          data: alirl,
        },
      ],
    }
    myChart.setOption(option)
  }
  const arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
    { id: 6, name: '部门6', pid: 0 },
    { id: 7, name: '部门7', pid: 6 },
  ]
  // const deal = (res: depType[], pid: number) => {
  //   const targetArr: depType[] = []
  //   const dealArr = (data: depType[], result: depType[], pid: number) => {
  //     data.forEach((item: depType) => {
  //       if (item.pid === pid) {
  //         const newArr = { ...item, children: [] }
  //         result.push(newArr)
  //         return dealArr(data, newArr.children, item.id)
  //       }
  //     })
  //   }
  //   dealArr(res, targetArr, pid)
  //   console.log(targetArr, 'targetArr')
  // }
  // const deal = (arr: depType[]) => {
  //   const result: depType[] = []
  //   const mapArr = new Map()
  //   arr.forEach((item) => {
  //     mapArr.set(item.id, { ...item, children: [] })
  //   })
  //   arr.forEach((v) => {
  //     const id = v.id
  //     const pid = v.pid
  //     const midItem = mapArr.get(id)
  //     if (!pid) {
  //       result.push( )
  //     } else {
  //       if (mapArr.get(pid)) {
  //         mapArr.get(pid).children.push(midItem)
  //       }
  //     }
  //   })
  //   console.log(result, 'arrarrarrarr')
  // }
  // const deal = (arr: depType[]) => {
  //   const result: depType[] = []
  //   const mapArr = new Map()
  //   arr.forEach((item) => {
  //     mapArr.set(item.id, { ...item, children: [] })
  //   })
  //   arr.forEach((v) => {
  //     const id = v.id
  //     const pid = v.pid
  //     const midItem = mapArr.get(id)
  //     if (!pid) {
  //       result.push(midItem)
  //     } else {
  //       if (mapArr.get(pid)) {
  //         mapArr.get(pid).children.push(midItem)
  //       }
  //     }
  //   })
  //   console.log(result, 'arrarrarrarr')
  // }
  const dealArr = (arr: depType[]) => {
    const targetArr: any = []
    const midMap: any = {}
    arr.forEach((item) => {
      const id = item.id
      const pid = item.pid
      if (!midMap[id]) {
        midMap[id] = {
          children: [],
        }
      }
      midMap[id] = {
        ...item,
        children: midMap[id]['children'],
      }
      if (!pid) {
        targetArr.push(midMap[id])
      } else {
        if (midMap[pid]) {
          midMap[pid].children.push(midMap[id])
        } else {
          midMap[pid] = {
            children: [],
          }
        }
      }
    })
    console.log(targetArr, 'midMapmidMapmidMap')
  }
  useEffect(() => {
    dealArr(arr)
    init()
  }, [])
  return <div className="china-map" id="chinaMap"></div>
}

export default Detail
