---
title: FileInput

---
# HTML File Input 속성별 브라우저 동작 데모

이 페이지는 `input[type="file"]`의 다양한 속성에 따라 데모 기기(PC, 모바일, 브라우저 종류)가 어떻게 다르게 반응하는지 실시간으로 확인하는 데모입니다.

<script setup>
import { ref } from 'vue'

const selectedType = ref('default') // 기본 선택값을 'default'로 설정
const fileList = ref([])

const handleFileChange = (event) => {
  const files = event.target.files
  fileList.value = Array.from(files).map(file => ({
    name: file.name,
    size: (file.size / 1024).toFixed(2) + ' KB',
    type: file.type || '알 수 없음(또는 폴더)'
  }))
}
</script>

## 🛠️ 테스트할 속성 선택
<div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px;">
  <strong>0. 기본 케이스 (순수 HTML 상태)</strong>
  <div style="padding-left: 10px;">
    <label><input type="radio" v-model="selectedType" value="default" /> 아무 속성 없음 (기본값)</label>
  </div>

  <strong>1. accept 속성 (특정 파일 포맷/미디어 제한)</strong>
  <div style="padding-left: 10px;">
    <label><input type="radio" v-model="selectedType" value="accept-audio" /> 오디오만 (`audio/*`)</label><br>
    <label><input type="radio" v-model="selectedType" value="accept-video" /> 비디오만 (`video/*`)</label><br>
    <label><input type="radio" v-model="selectedType" value="accept-image" /> 이미지만 (`image/*`)</label><br>
    <label><input type="radio" v-model="selectedType" value="accept-ext" /> 특정 확장자 제한 (`.pdf, .docx`)</label>
  </div>

  <strong>2. capture 속성 (모바일 기기 카메라/마이크 직접 연동)</strong>
  <div style="padding-left: 10px;">
    <label><input type="radio" v-model="selectedType" value="capture-user" /> 전면 카메라 (`capture="user"`)</label><br>
    <label><input type="radio" v-model="selectedType" value="capture-environment" /> 후면 카메라 (`capture="environment"`)</label>
  </div>

  <strong>3. 다중 선택 및 폴더 선택 속성</strong>
  <div style="padding-left: 10px;">
    <label><input type="radio" v-model="selectedType" value="multiple" /> 여러 파일 동시 선택 (`multiple`)</label><br>
    <label><input type="radio" v-model="selectedType" value="directory" /> 폴더 전체 업로드 (`webkitdirectory` - 비표준/브라우저 지원 다름)</label>
  </div>
</div>

---

## 🖥️ 실시간 데모 실행 결과

<div class="demo-box" style="padding: 24px; border: 2px dashed #3eaf7c; border-radius: 12px; background-color: var(--vp-c-bg-soft); margin-top: 20px;">

  <div v-if="selectedType === 'default'">
    <h4>📦 아무 속성 없는 기본 상태 (`input type="file"`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 시스템 표준 파일 탐색기가 열립니다. 제한이 없으므로 이미지, 문서, 오디오 등 어떤 파일이든 선택이 가능하고 기본적으로 단일 파일만 선택할 수 있습니다.</p>
    <input type="file" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'accept-audio'">
    <h4>🎵 오디오 파일만 선택 (`accept="audio/*"`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 데스크톱에서는 음악 파일만 활성화되며, 모바일(iOS/Android)에서는 음성 녹음기 앱이 선택지에 등장합니다.</p>
    <input type="file" accept="audio/*" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'accept-video'">
    <h4>🎥 비디오 파일만 선택 (`accept="video/*"`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 모바일 기기에서 클릭 시 바로 비디오 동영상 촬영 모드로 진입하거나 동영상 앨범이 열립니다.</p>
    <input type="file" accept="video/*" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'accept-image'">
    <h4>🖼️ 이미지 파일만 선택 (`accept="image/*"`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 갤러리/사진첩이 바로 연동되며 문서 등 다른 파일은 선택할 수 없게 흐려집니다.</p>
    <input type="file" accept="image/*" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'accept-ext'">
    <h4>📄 특정 문서 확장자 제한 (`accept=".pdf, .docx, .xlsx"`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 미디어 타입이 아닌 실무 문서(PDF, Word, Excel) 확장자만 정확히 필터링하고 싶을 때 사용합니다.</p>
    <input type="file" accept=".pdf, .docx, .xlsx" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'capture-user'">
    <h4>🤳 모바일 전면 카메라 연동 (`capture="user"` / 이미지만)</h4>
    <p style="font-size: 0.9em; color: #777;">⚠️ <b>주의:</b> 모바일 브라우저 전용 속성입니다. 스마트폰에서 누르면 파일 탐색기 대신 <b>전면 셀프 카메라</b>가 즉시 켜집니다.</p>
    <input type="file" accept="image/*" capture="user" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'capture-environment'">
    <h4>📸 모바일 후면 카메라 연동 (`capture="environment"` / 비디오)</h4>
    <p style="font-size: 0.9em; color: #777;">⚠️ <b>주의:</b> 모바일 전용 속성입니다. 스마트폰에서 누르면 기본 <b>후면 카메라(동영상 촬영)</b>가 즉시 구동됩니다.</p>
    <input type="file" accept="video/*" capture="environment" @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'multiple'">
    <h4>📚 여러 파일 다중 선택 (`multiple`)</h4>
    <p style="font-size: 0.9em; color: #777;">💡 Ctrl 키나 Shift 키(모바일은 꾹 누르기)를 이용해 한 번에 여러 개의 파일을 전송할 수 있습니다.</p>
    <input type="file" multiple @change="handleFileChange" />
  </div>

  <div v-if="selectedType === 'directory'">
    <h4>📁 폴더 전체 구조 선택 (`webkitdirectory`)</h4>
    <p style="font-size: 0.9em; color: #777;">⚠️ <b>주의:</b> 데스크톱 브라우저(Chrome, Edge 등) 위주로 지원하며 Safari나 일부 모바일에서는 동작하지 않을 수 있습니다. 파일 대신 '폴더'를 통째로 선택합니다.</p>
    <input type="file" webkitdirectory directory @change="handleFileChange" />
  </div>

</div>

---

### 📊 현재 선택된 파일 데이터 구조 (`event.target.files`)

선택한 속성에 따라 브라우저가 넘겨준 파일 객체 리스트입니다.

<div v-if="fileList.length > 0" style="margin-top: 15px; background: #282c34; padding: 15px; border-radius: 8px; color: #abb2bf;">
  <ul style="list-style: none; padding-left: 0; margin: 0;">
    <li v-for="(file, index) in fileList" :key="index" style="margin-bottom: 8px; border-bottom: 1px solid #3e4451; padding-bottom: 8px;">
      🔹 <b>파일명:</b> <span style="color: #98c379;">{{ file.name }}</span><br>
      🔹 <b>크기:</b> <span style="color: #d19a66;">{{ file.size }}</span><br>
      🔹 <b>MIME 타입:</b> <span style="color: #61afef;">{{ file.type }}</span>
    </li>
  </ul>
</div>
<div v-else style="color: #999; font-style: italic; margin-top: 15px;">
  아직 선택된 파일이 없거나 브라우저에서 파일 데이터를 받아오지 못했습니다.
</div>
