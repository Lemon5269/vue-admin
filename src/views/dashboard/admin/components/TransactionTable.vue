<template>
  <el-table :data="list" style="width: 100%;padding-top: 15px;">
    <el-table-column label="fingerprint" width="300px">
      <template slot-scope="scope">
        {{ scope.row.fingerprint }}
      </template>
    </el-table-column>
    <el-table-column label="address">
      <template slot-scope="scope">
        {{ scope.row.address }}
      </template>
    </el-table-column>
    <el-table-column label="contactLine">
      <template slot-scope="scope">
        {{ scope.row.contactLine }}
      </template>
    </el-table-column>
    <el-table-column label="publishedMillis">
      <template slot-scope="scope">
        {{ scope.row.publishedMillis }}
      </template>
    </el-table-column>
    <el-table-column label="nickname">
      <template slot-scope="scope">
        {{ scope.row.nickname }}
      </template>
    </el-table-column>
    <el-table-column label="hostname">
      <template slot-scope="scope">
        {{ scope.row.hostname }}
      </template>
    </el-table-column>
    <el-table-column label="dirPort">
      <template slot-scope="scope">
        {{ scope.row.dirPort }}
      </template>
    </el-table-column>
    <el-table-column label="contactLine">
      <template slot-scope="scope">
        {{ scope.row.contactLine }}
      </template>
    </el-table-column>
    <!--    <el-table-column label="publishedMillis" width="100" align="center">-->
    <!--      <template slot-scope="{row}">-->
    <!--&lt;!&ndash;        <el-tag :type="row.status | statusFilter">&ndash;&gt;-->
    <!--&lt;!&ndash;          {{ row.status }}&ndash;&gt;-->
    <!--&lt;!&ndash;        </el-tag>&ndash;&gt;-->
    <!--        {{ scope.row.publishedMillis | toThousandFilter }}-->
    <!--      </template>-->
    <!--    </el-table-column>-->
  </el-table>
</template>

<script>
import { transactionList } from '@/api/remote-search'
import api from '@/api/test'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter(str) {
      return str.substring(0, 30)
    }
  },
  data() {
    return {
      list: null
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      api.status().then(res => {
        // console.log(1111111111111,res);
        this.list = res.data.records
        console.log(111111111111, this.list)
      })
    }
  }
}
</script>
