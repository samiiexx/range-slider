// Copyright 2021 sfchi
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

const range = document.getElementById('range')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.nextElementSibling

    const rangeWidth = getComputedStyle(e.target).getPropertyValue('width')
    const labelWidth = getComputedStyle(label).getPropertyValue('width')

    const numWidth = +rangeWidth.substring(0, rangeWidth.length - 2)
    const numLabelWidth = +labelWidth.substring(0, labelWidth.length - 2)

    const min = +e.target.min
    const max = +e.target.max

    const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

    label.style.left = `${left}px`


    label.innerHTML = value
})

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}