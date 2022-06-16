<template>
  <div class="dashboard-editor-container">
    <!--    <h1>{{test}}</h1>-->
    <!--    右上角-->
    <!--    <github-corner class="github-corner" />-->

    <!--  顶部搜索栏  -->
    <!--  搜索完之后应该怎么办呢？？？跳到另一个页面？或者可以出现一个弹窗-->
    <!--  注意vue框架中使用enter回车要加入这个native  -->
    <!--  按下回车键可以弹出一个列表，找到对应的内容  -->
    <div>
      <el-input v-model="name" placeholder="请输入name" style="width: 200px; margin-right: 10px;" class="filter-item" @keyup.enter.native="handleFilter" />
      <el-input v-model="address" placeholder="请输入address" style="width: 200px; margin-right: 10px;" class="filter-item" @keyup.enter.native="handleFilter" />

      <el-date-picker
        v-model="dateValue"
        style="width: 200px; margin-right: 10px"
        type="month"
        placeholder="选择月"
      />

      <!--
            点击查询可以展示弹窗
            点击按钮的弹窗里就应该发请求
         -->
      <el-button v-waves class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">
        查询
      </el-button>
    </div>

    <!--    <el-row :gutter="1">-->
    <!--      <el-col :xs="{span: 12}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 5}" :xl="{span: 1}" style="margin-bottom:30px;">-->
    <!--&lt;!&ndash;        &ndash;&gt;-->
    <!--        <el-date-picker-->
    <!--          v-model="dateValue"-->
    <!--          type="month"-->
    <!--          placeholder="选择月">-->
    <!--        </el-date-picker>-->
    <!--      </el-col>-->

    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <el-button icon="el-icon-search" circle></el-button>-->
    <!--      </el-col>-->
    <!--    </el-row>-->
    <!--    <el-input-->
    <!--      type="text"-->
    <!--      placeholder="请输入address或nickname，按下回车键弹出内容"-->
    <!--      v-model="searchContent"-->
    <!--      @keyup.enter.native="search"-->
    <!--    >-->
    <!--      <i slot="prefix" class="el-input__icon el-icon-search"></i>-->
    <!--    </el-input>-->

    <!--  首页上四块  -->
<!--    <panel-group @handleSetLineChartData="handleSetLineChartData" />-->

    <el-row :gutter="8">
      <!--   这里可以展示用户登录的信息   -->
      <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 8}" :xl="{span: 6}" style="margin-bottom:30px;">-->
      <!--        <box-card />-->
      <!--      </el-col>-->
      <!--  这里span指的是栅格占据的列数，offset值山歌左侧的间隔格数    -->
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
      <!--        <todo-list />-->
      <!--      </el-col>-->
      <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
      <!--        <box-card />-->
      <!--      </el-col>-->
    </el-row>

    <!--  首页上四块  -->
    <!--    <panel-group @handleSetLineChartData="handleSetLineChartData" />-->

    <!--  lineChart  -->
    <!--    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">-->
    <!--      <line-chart :chart-data="lineChartData" />-->
    <!--    </el-row>-->

    <!-- 三个小图，不知道能展示点什么东西   -->
<!--    <el-row :gutter="32">-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <raddar-chart />-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <pie-chart />-->
<!--        </div>-->
<!--      </el-col>-->
<!--      <el-col :xs="24" :sm="24" :lg="8">-->
<!--        <div class="chart-wrapper">-->
<!--          <bar-chart />-->
<!--        </div>-->
<!--      </el-col>-->
<!--    </el-row>-->

    <!--  可以通过gutter属性来设置方格之间的距离  -->
    <!--    <el-row :gutter="8">-->
    <!--      &lt;!&ndash;  这里span指的是栅格占据的列数，offset值山歌左侧的间隔格数    &ndash;&gt;-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">-->
    <!--        <transaction-table />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <todo-list />-->
    <!--      </el-col>-->
    <!--      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">-->
    <!--        <box-card />-->
    <!--      </el-col>-->
    <!--    </el-row>-->

    <!--  弹窗的东西都放在最下面 @dragDialog是什么呢，也是个事件  -->
    <el-dialog v-el-drag-dialog :visible.sync="filterDialogVisible" title="节点数据" width="1200px">
      <!--  这里面要有表格    -->
      <el-table :data="resData.slice((currentPage - 1) * pageSize, currentPage * pageSize)">
        <!--   每一行前的序号    -->
        <el-table-column label="序号" width="50px" align="center">
          <template slot-scope="scope">
            {{ scope.$index + (currentPage - 1) * pageSize + 1 }}
          </template>
        </el-table-column>
        <el-table-column property="id" label="id" width="200" />
        <el-table-column property="nickname" label="nickname" width="100" />
        <el-table-column property="address" label="address" width="100" />
        <el-table-column property="orPort" label="orPort" width="100" />
        <el-table-column property="socksPort" label="socksPort" width="100" />
        <el-table-column property="dirPort" label="dirPort" width="100" />
        <el-table-column property="orAddresses" label="orAddresses" width="100" />
        <el-table-column property="bandwidthRate" label="bandwidthRate" width="100" />
        <el-table-column property="bandwidthBurst" label="bandwidthBurst" width="100" />
        <el-table-column property="bandwidthObserved" label="bandwidthObserved" width="100" />
        <el-table-column property="platform" label="platform" />
        <el-table-column property="bandwidthBurst" label="bandwidthBurst" />
        <el-table-column property="publishedMillis" label="publishedMillis" />
        <el-table-column property="dt" label="dt" />
        <!--   最后还要加个按钮     -->
        <el-table-column label="实时带宽" width="100" prop="redirectDetail" align="center">
          <!--    这里面可以做对比图，直接插入插件就行      -->
          <template slot-scope="scope">
            <!--     这里考虑该怎么把图插进来呢？？？     -->
            <el-button
              icon="el-icon-d-arrow-right"
              size="small"
              style="font-size: 20px"
              type="text"
              @click="openChart(scope.row.readHistory, scope.row.writeHistory)"
            />
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total,prev,pager,next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </el-dialog>

    <el-dialog v-el-drag-dialog :visible.sync="chartDialogVisible" title="实时带宽" width="1000px">
      <!--  这里面要有表格    -->
      <!--      <h1>hello,打开了chartialog</h1>-->
      <line-chart :chart-data="readHistory" />
    </el-dialog>
  </div>
<!--
  needToDo:
  1、表格分页看看应该怎么做
  2、昨天说首页要请求一张用户的图片，看看能不能请求到呢
-->
</template>

<script>

// import GithubCorner from '@/components/GithubCorner'
import PanelGroup from './components/PanelGroup'
import LineChart from './components/LineChart'
import RaddarChart from './components/RaddarChart'
import PieChart from './components/PieChart'
import BarChart from './components/BarChart'
import TransactionTable from './components/TransactionTable'
import TodoList from './components/TodoList'
import BoxCard from './components/BoxCard'
import elDragDialog from '@/directive/el-drag-dialog' // base on element-ui
import waves from '@/directive/waves' // waves directive
import Pagination from '@/components/Pagination' // secondary package based on el-paginatio
// 此处是test
import api from '@/api/test'
import user from '@/api/user'

const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145],
    test: [33, 27, 120, 55, 66, 44, 23],
    xdata: ['1', '2']
  },
  // 看看小图里面还能放什么
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}

export default {
  name: 'DashboardAdmin',
  directives: { elDragDialog, waves },
  components: {
    // GithubCorner, //右上角github图标
    PanelGroup,
    LineChart,
    RaddarChart,
    PieChart,
    BarChart,
    TransactionTable,
    TodoList,
    BoxCard,
    Pagination
  },
  data() {
    return {
      lineChartData: lineChartData.newVisitis,
      test: '',
      searchContent: '',
      dateValue: '',
      filterDialogVisible: false,
      chartDialogVisible: false,
      resData: [],
      readHistory: {
        time: [],
        value: [],
        value2: []
      },
      writeHistory: {
        time: [],
        value: []
      },
      name: '',
      address: '',

      // 分页，其实不用定义也可以把
      currentPage: 0,
      pageSize: 0,
      total: 0
    }
  },
  computed: {
    timeDefault() {
      var date = new Date()
      var s1 = date.getFullYear() + '-' + (date.getMonth() + 1)
      return s1
    }
  },
  created() {
    this.fetchData()
  },
  mounted() {
    this.dateValue = this.timeDefault
    // this.handleFilter();
  },
  methods: {
    fetchData() {
      api.test().then(res => {
        console.log(res)
        this.test = res.data.status
      })
    },
    handleSetLineChartData(type) {
      this.lineChartData = lineChartData[type]
    },

    // 搜索框进行搜索
    search() {
      if (!this.searchContent) alert('不允许输入为空')
      // 打开弹窗，弹窗里面有什么呢？？
    },
    // 首页条件查询
    handleFilter() {
      // 1.请求接口，拿到需要查询的东西（时间是必选）
      // 能拿到数据
      var data = {
        name: this.name,
        address: this.address,
        date: this.dateValue
      }
      api.getAllData(data).then(res => {
        // 分页
        this.total = res.data.total
        this.currentPage = res.data.current
        this.pageSize = res.data.size

        res = res.data.records
        this.resData = res
        console.log(res)
        console.log(res.readHistory)
        // this.readHistory = JSON.parse(res.readHistory);
        console.log(this.readHistory)
      })
      // 2.处理请求数据

      // 3.打开弹窗，将数据放在表格中
      this.filterDialogVisible = true
    },

    // 拿到图表
    openChart(val, write) {
      // 1.拿到这条数据，整体出相应的数据
      var jsonParseData = JSON.parse(val)
      var jsonParseData2 = JSON.parse(write)
      console.log(jsonParseData)
      // 构造readHistory可以用for in 和 for of
      // for in遍历出来的是key值，直接用for in就可以把
      for (const jsonParseDataKey in jsonParseData.bandwidthValues) {
        // 注意现在这个key还是时间戳
        this.readHistory.time.push(this.getLocalTime(jsonParseDataKey))
        // 没问题了
        this.readHistory.value.push(jsonParseData.bandwidthValues[jsonParseDataKey])
      }
      for (const jsonParseDataKey in jsonParseData2.bandwidthValues) {
        this.readHistory.value2.push(jsonParseData2.bandwidthValues[jsonParseDataKey])
      }
      console.log(this.readHistory)
      // 2.打开弹窗，数据传过去
      this.chartDialogVisible = true
    },

    // 时间戳转换
    getLocalTime(date) {
      return new Date(parseInt(date)).toLocaleString().replace(/:\d{1,2}$/, ' ')
    },

    // 分页切换
    handleCurrentChange(val) {
      this.currentPage = val
    }
  }
}
</script>

<style lang="scss" scoped>
.dashboard-editor-container {
  padding: 32px;
  background-color: rgb(240, 242, 245);
  position: relative;

  /*.github-corner {*/
  /*  position: absolute;*/
  /*  top: 0px;*/
  /*  border: 0;*/
  /*  right: 0;*/
  /*}*/

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 32px;
  }
}

@media (max-width:1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
</style>
