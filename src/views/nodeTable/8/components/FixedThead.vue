<template>
  <div class="app-container">
    <!--    <div class="filter-container">-->
    <!--      <el-checkbox-group v-model="checkboxVal">-->
    <!--        <el-checkbox label="apple">-->
    <!--          apple-->
    <!--        </el-checkbox>-->
    <!--        <el-checkbox label="banana">-->
    <!--          banana-->
    <!--        </el-checkbox>-->
    <!--        <el-checkbox label="orange">-->
    <!--          orange-->
    <!--        </el-checkbox>-->
    <!--      </el-checkbox-group>-->
    <!--    </div>-->

    <!--    <el-table :key="key" :data="tableData" border fit highlight-current-row style="width: 100%">-->
    <!--      <el-table-column prop="geoCountty" label="countryName" width="180" />-->
    <!--      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit">-->
    <!--        <template slot-scope="scope">-->
    <!--          {{ scope.row[fruit] }}-->
    <!--        </template>-->
    <!--      </el-table-column>-->
    <!--    </el-table>-->

    <el-table :data="tableData" style="width: 100%;padding-top: 15px;">
      <el-table-column label="bridgeIpTransports" width="300px">
        <template slot-scope="scope">
          {{ scope.row.bridgeIpTransports }}
        </template>
      </el-table-column>

      <el-table-column label="bridgeIpVersions" width="300px">
        <template slot-scope="scope">
          {{ scope.row.bridgeIpVersions }}
        </template>
      </el-table-column>
      <el-table-column label="bridgeIps" width="300px">
        <template slot-scope="scope">
          {{ scope.row.bridgeIps }}
        </template>
      </el-table-column>

      <el-table-column label="bridgeStatsEndMillis" width="300px">
        <template slot-scope="scope">
          {{ scope.row.bridgeStatsEndMillis }}
        </template>
      </el-table-column>

      <el-table-column label="cellCircuitsPerDecile" width="300px">
        <template slot-scope="scope">
          {{ scope.row.cellCircuitsPerDecile }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  const defaultFormThead = ['apple', 'banana']
  import api from '@/api/test'
  export default {
    data() {
      return {
        tableData: [
          {
            name: 'fruit-1',
            apple: 'apple-10',
            banana: 'banana-10',
            orange: 'orange-10'
          },
          {
            name: 'fruit-2',
            apple: 'apple-20',
            banana: 'banana-20',
            orange: 'orange-20'
          }
        ],
        key: 1, // table key
        formTheadOptions: ['apple', 'banana', 'orange'],
        checkboxVal: defaultFormThead, // checkboxVal
        formThead: defaultFormThead // 默认表头 Default header
      }
    },
    watch: {
      checkboxVal(valArr) {
        this.formThead = this.formTheadOptions.filter(i => valArr.indexOf(i) >= 0)
        this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        api.getLinkData().then(res => {
          // console.log(1111111111111,res);
          this.tableData = res.data
          console.log(111111111111, this.list)
        })
      }
    }
  }
</script>

