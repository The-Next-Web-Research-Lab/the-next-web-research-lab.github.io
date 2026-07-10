---
title: FileInput

---
# File Input 속성별 데모

HTML `input type="file"`의 다양한 속성(accept, multiple 등)에 따른 동작을 테스트하는 데모입니다.

<script setup>
import { ref } from 'vue'

const selectedType = ref('all') // 데모 제어용 상태
const fileList = ref([])

const handleFileChange = (event) => {
  const files = event.target.files
  fileList.value = Array.from(files).map(file => ({
    name: file.name,
    size: (file.size / 1024).toFixed(2) + ' KB',
    type: file.type
  }))
}
</script>

## 조건 선택
<label>
  <input type="radio" v-model="selectedType" value="all" /> 모든 파일
</label>
<label>
  <input type="radio" v-model="selectedType" value="image" /> 이미지만 (`accept="image/*"`)
</label>
<label>
  <input type="radio" v-model="selectedType" value="multiple" /> 여러 파일 선택 (`multiple`)
</label>

## 실시간 데모 결과

<div class="demo-container" style="padding: 20px; border: 1px solid #ccc; border-radius: 8px; margin-top: 15px;">
  <div v-if="selectedType === 'all'">
    <h4>기본 파일 업로드</h4>
    <input type="file" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'image'">
    <h4>이미지 파일만 허용 (accept="image/*")</h4>
    <input type="file" accept="image/*" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'multiple'">
    <h4>다중 파일 업로드 (multiple)</h4>
    <input type="file" multiple @change="handleFileChange" />
  </div>

  <div v-if="fileList.length > 0" style="margin-top: 15px;">
    <h5>선택된 파일 목록:</h5>
    <ul>
      <li v-file="file in fileList" :key="file.name">
        <strong>{{ file.name }}</strong> ({{ file.size }}) - 타입: {{ file.type }}
      </li>
    </ul>
  </div>
</div>
