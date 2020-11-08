<template>
    <div>
         <el-table
            id="table"
            :data="tableData"
            :span-method="objectSpanMethod"
            border
            style="width: 100%; margin-top: 20px">
            <el-table-column
                prop="id"
                label="ID"
                width="180">
            </el-table-column>
            <el-table-column
                prop="name"
                label="姓名">
            </el-table-column>
            <el-table-column
                prop="amount1"
                label="数值 1（元）">
            </el-table-column>
            <el-table-column
                prop="amount2"
                label="数值 2（元）">
            </el-table-column>
            <el-table-column
                prop="amount3"
                label="数值 3（元）">
            </el-table-column>
            </el-table>

        <button @click="exportExcel">table导出数据</button>
        <button @click="testBtn">JSON导出数据</button>
    </div>
</template>

<script>
import FileSaver from "file-saver";
// import "cpexcel";
// import "ods";
import XLSX from "xlsx";
export default {
    data () {
        return {
            tableData: [{
                id: "12987122",
                name: "王小虎",
                amount1: "234",
                amount2: "3.2",
                amount3: 10
            }, {
                id: "12987123",
                name: "王小虎",
                amount1: "165",
                amount2: "4.43",
                amount3: 12
            }, {
                id: "12987124",
                name: "王小虎",
                amount1: "324",
                amount2: "1.9",
                amount3: 9
            }, {
                id: "12987125",
                name: "王小虎",
                amount1: "621",
                amount2: "2.2",
                amount3: 17
            }, {
                id: "12987126",
                name: "王小虎",
                amount1: "539",
                amount2: "4.1",
                amount3: 15
            }],
            exportData: null
        };
    },
    methods: {
        json2Excel (json, tableTitle, fileName, wbConfig = {}, woptsConfig = {}) {
            const wopts = {
                bookType: "xlsx",
                bookSST: false,
                type: "binary",
                cellStyles: true
            };
            const workBook = {
                SheetNames: ["Sheet1"],
                Sheets: {},
                Props: {}
            };
            json = tableTitle ? [tableTitle, ...json] : [...json];
            workBook.Sheets.Sheet1 = XLSX.utils.aoa_to_sheet(json, { skipHeader: true }); // skipHeader 忽略原来的表头
            workBook.Sheets.Sheet1["!cols"] = [
                { wch: 10 }, // 第一列
                { wch: 20 }, // 第二列
                { wch: 80 } // 第三列
            ];
            const rs = (XLSX.write({ ...workBook }, { ...wopts, ...woptsConfig }));
            console.log('=======>111',rs)
            // rs 是字节数 需要转换成流,转换成Uint8Array
            this.saveAs(new Blob([this.s2ab(rs)], { type: "application/octet-stream" }), fileName);
        },
        saveAs (obj, fileName) { // 当然可以自定义简单的下载文件实现方式
            const tmpa = document.createElement("a");
            tmpa.download = fileName || `${fileName}.xlsx`;
            tmpa.href = URL.createObjectURL(obj); // 绑定a标签
            tmpa.click(); // 模拟点击实现下载
            setTimeout(function () { // 延时释放
                URL.revokeObjectURL(obj); // 用URL.revokeObjectURL()来释放这个object URL
            }, 100);
        },
        s2ab (s) {
            if (typeof ArrayBuffer !== "undefined") {
                var buf = new ArrayBuffer(s.length);
                var view = new Uint8Array(buf);
                for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i)
                // 返回 buf 或者 view 都阔以
                console.log('=======>',buf,view)
                return view;
            } else {
                var buf = new Array(s.length);
                for (var i = 0; i != s.length; ++i) buf[i] = s.charCodeAt(i) & 0xFF;
                return buf;
            }
        },
        testBtn () {
            const data = [
                { A: "S", A2: "h", C: "e", D: "e", E: "t", F: "J", G: "S" },
                { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7 },
                { A: 2, B: 3, C: 4, D: 5, E: 6, F: 7, G: 8 }
            ];
            var aoa = [
                ["主要信息", null, null, "其它信息"], // 特别注意合并的地方后面预留2个null
                ["姓名", "性别", "年龄", "注册时间"],
                ["张三", "男", 18, new Date()],
                ["李四", "女", 22, new Date()]
            ];
            const header = { A: "a", B: "b", C: "", D: "", E: "", F: "c", G: "d" };
            // const wbConfig = {
            //     Sheets: {
            //         Sheet1: {
            //             "!merges": [
            //                 { s: { r: 0, c: 0 }, e: { r: 0, c: 2 } }
            //             ]
            //         }
            //     }
            // };
            this.json2Excel(aoa, "", "11.xlsx");
        },
        objectSpanMethod ({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                if (rowIndex % 2 === 0) {
                    return {
                        rowspan: 2,
                        colspan: 1
                    };
                } else {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        exportExcel () {
            var xlsxParam = { raw: true }; // 导出的内容只做解析，不进行格式转换(添加此行代码表格中的百分比就不会再导出的时候被转换成小数点)
            const wb = XLSX.utils.table_to_book(
                document.querySelector("#table"),
                xlsxParam
            );
            const wbout = XLSX.write(wb, {
                bookType: "xlsx",
                bookSST: true,
                type: "array"
            });
            // 获取当前的时间戳，用来当文件名
            const time = new Date().getTime();
            try {
                FileSaver.saveAs(
                    new Blob([wbout], { type: "application/octet-stream" }),
                    `${time}.xlsx`
                ); // ${time}是自己导出文件时的命名，随意
            } catch (e) {
                if (typeof console !== "undefined") console.log(e, wbout);
            }
            return wbout;
        }
    }
};
</script>

<style lang="scss" scoped>
</style>