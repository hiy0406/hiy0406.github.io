---
layout: page
title: 고딕 소설 단어 비교
permalink: /gothic/
---

<h2>Frankenstein vs. Dracula</h2>
<div style="display: flex; gap: 1em;">
    <div style="flex: 1;">
        <h3>Frankenstein (Shelley, 1818)</h3>
        <div style="height: 600px;">
        <canvas id="chart-frankenstein"></canvas>
        </div>
    </div>
    <div style="flex: 1;">
        <h3>Dracula (Stoker, 1897)</h3>
        <div style="height: 600px;">
            <canvas id="chart-dracula"></canvas>
        </div>
    </div>
</div>

{% include chartjs.html %}
<script src="/assets/js/analysis.js"></script>
<script src="/assets/js/gothic.js"></script>


## 보고서

### 추가한 불용어와 근거
NLTK 기본 목록 외에 다음 10개의 단어를 `data/stopwords-custom.txt`에 추가하였다.
> `said`, `would`, `could`, `one`, `upon`, `shall`, `may`, `might`, `even`, `yet`

- `said`: 등장인물의 대화를 서술할 때 반복적으로 사용되는 동사
- `would`, `could`, `shall`, `may`, `might`: 조동사로서 문장의 문법적 구조를 형성하는 역할
- `one`: 매우 일반적인 대명사
- `upon`: 19세기 영문 소설에서 자주 사용되는 전치사
- `even`, `yet`: 의미를 강조하거나 문장을 연결하는 기능이 강한 부사

이러한 단어들은 두 작품 모두에서 높은 빈도로 등장했으나, 작품의 특징을 드러나거나 두 작품 간의 차이를 파악하는데에는 유용하지 않다고 판단하였다.

### 두 작품의 단어 빈도가 들려주는 이야기
- **공통으로 도드라지는 단어**: 두 작품 모두에서 `man`, `night`, `saw` 등의 단어가 자주 등장하였다. 두 소설 모두 인물이 보고 겪은 것을 중심으로 이야기가 전개되며, 시간적 배경으로 밤이 자주 활용됨을 알 수 있다.
- **한 작품에만 도드라지는 단어와 그것이 시사하는 작품의 특성**: *Frankenstein*에서는 `father`, `life`, `mind`, `heart`, `feelings` 등의 단어가 많이 나타났다. 프랑켄슈타인과 창조자 사이의 이야기를 통해, 인간의 생명과 감정에 대한 고민이 작품의 중요한 주제인 것으로 보인다. 반면 *Dracula*에서는 `van`, `helsing`, `lucy`, `mina`, `jonathan` 등 주요 인물의 이름이 자주 등장하였다. 작품이 여러 인물의 상호작용을 중심으로 전개되는 것을 추측할 수 있다.

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="/assets/js/hw13.js"></script>