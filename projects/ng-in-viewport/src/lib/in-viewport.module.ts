/*!
 * @license
 * Copyright (c) 2020 Piotr Stępniewski <k3nsei.pl@gmail.com>
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file in the root directory of this source tree.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InViewportDirective } from './in-viewport.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [InViewportDirective],
  exports: [InViewportDirective]
})
export class InViewportModule {}
