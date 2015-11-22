/**
 * @license
 * Copyright 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

 export default class MaterialProgress {
   constructor(element) {
     this.element_ = element;
     this.CssClasses_ = {
       INDETERMINATE_CLASS: 'mdl-progress__indeterminate',
       AUXBAR: 'mdl-progress__auxbar',
       BUFFERBAR: 'mdl-progress__bufferbar',
       BAR: 'mdl-progress__bar',
       PROGRESSBAR: 'mdl-progress__progressbar',
       IS_UPGRADED: 'mdl-progress--upgraded'
     };
     this.auxbar_ =
      this.element_.querySelector('.' + this.CssClasses_.AUXBAR);
     this.auxbar_.style.width = '0%';

     this.bufferbar_ =
      this.element_.querySelector('.' + this.CssClasses_.BUFFERBAR);
     this.bufferbar_.style.width = '100%';

     this.progressbar_ =
      this.element_.querySelector('.' + this.CssClasses_.PROGRESSBAR);
     this.progressbar_.style.width = '0%';

     this.element_.classList.add(this.CssClasses_.IS_UPGRADED);
   }

   /**
    * Set the current progress of the progressbar.
    *
    * @param {number} percent Percentage of the progress (0-100)
    * @public
    */
   setProgress(percent) {
     if (this.element_.classList.contains(
       this.CssClasses_.INDETERMINATE_CLASS
     )) {
       return;
     }

     this.progressbar_.style.width = percent + '%';
   }

   /**
    * Set the current progress of the buffer.
    *
    * @param {number} percent Percentage of the buffer (0-100)
    * @public
    */
   setBuffer(percent) {
     this.bufferbar_.style.width = percent + '%';
     this.auxbar_.style.width = (100 - percent) + '%';
   }
 }