/*
 * @Author: M78.Kangzhaotong
 * @Date: 2022-07-27 14:38:34
 * @Last Modified by: M78.Kangzhaotong
 * @Last Modified time: 2023-02-22 18:01:52
 */
import React, { useEffect } from 'react'
import * as echarts from 'echarts'
import 'echarts-gl'
import { geoCoordMap, alirl, alirlTwo } from './map'
import china from './china.json'
import './index.less'

interface paramsType {
  componentType: 'series'
  // 系列类型
  seriesType: string
  // 系列在传入的 option.series 中的 index
  seriesIndex: number
  // 系列名称
  seriesName: string
  // 数据名，类目名
  name: string
  // 数据在传入的 data 数组中的 index
  dataIndex: number
  // 传入的原始数据项
  data: object
  // 传入的数据值。在多数系列下它和 data 相同。在一些系列下是 data 中的分量（如 map、radar 中）
  value: any
  // 坐标轴 encode 映射信息，
  // key 为坐标轴（如 'x' 'y' 'radius' 'angle' 等）
  // value 必然为数组，不会为 null/undefied，表示 dimension index 。
  // 其内容如：
  // {
  //     x: [2] // dimension index 为 2 的数据映射到 x 轴
  //     y: [0] // dimension index 为 0 的数据映射到 y 轴
  // }
  encode: object
  // 维度名列表
  dimensionNames: Array<string>
  // 数据的维度 index，如 0 或 1 或 2 ...
  // 仅在雷达图中使用。
  dimensionIndex: number
  // 数据图形的颜色
  color: string
}

const Detail = () => {
  const init = () => {
    echarts.registerMap('china', china)
    const dom: any = document.querySelector('#chinaMap')
    const myChart = echarts.init(dom)
    const option = {
      title: {
        text: '全国行政区划3D地图',
        // x: 'center',
        top: '10',
        textStyle: {
          color: '#000',
          fontSize: 24,
        },
      },
      tooltip: {
        show: true,
        formatter: (params: paramsType) => {
          const data =
            `测试1:${params.name}<br/>` +
            `值:${params.value[2]}<br/>` +
            `地理坐标:[${params.value[0]},${params.value[1]}]`
          return data
        },
      },
      geo3D: {
        map: 'china',
        roam: true,
        boxWidth: 120,
        // 配置为全景贴图
        // environment: 'assets/test.jpg',
        // 配置为纯黑色的背景
        // environment: 'rgba(0,0,0,0)',
        regionHeight: 2,
        // 配置为垂直渐变的背景
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
        boxHeight: 20,
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
            // backgroundColor: 'rgba(0,0,0,0)',
            backgroundColor: 'rgba(53,171,199,0)',
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
          textureTiling: 5, // 纹理平铺，1是拉伸，数字表示纹理平铺次数
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
        // bar
        {
          type: 'bar3D',
          name: 'aaaa',
          coordinateSystem: 'geo3D',
          zlevel: 3,
          barSize: 1, // 柱子粗细
          shading: 'lambert',
          itemStyle: {
            color: 'rgba(0,255,255, 0.8)',
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
              backgroundColor: 'transparent',
            },
            formatter(params: paramsType) {
              return params.value[2]
            },
          },
          data: alirl,
        },
        {
          type: 'bar3D',
          name: 'ssss',
          coordinateSystem: 'geo3D',
          zlevel: 3,
          barSize: 1, // 柱子粗细
          shading: 'lambert',
          itemStyle: {
            color: 'rgba(0,139,139)',
          },
          label: {
            show: true,
            position: 'top',
            textStyle: {
              color: '#fff',
              backgroundColor: '#778899',
            },
            formatter(params: paramsType) {
              return params.value[2]
            },
          },
          data: alirlTwo,
        },
      ],
    }
    myChart.setOption(option)
  }
  useEffect(() => {
    init()
  }, [])
  return <div className="china-map" id="chinaMap" />
}

export default Detail
