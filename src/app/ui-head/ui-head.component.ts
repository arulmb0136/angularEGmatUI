import { element } from 'protractor'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { trigger, animate, transition, style } from '@angular/animations'

@Component({
  selector: 'app-ui-head',
  templateUrl: './ui-head.component.html',
  styleUrls: ['./ui-head.component.css'],
  animations: [
    // animation triggers go here
  ]
})
export class UiHeadComponent implements OnInit {
  quantScoreInputC = ''
  quantScoreInputT = ''
  verbalScoreInputC = ''
  verbalScoreInputT = ''
  input1
  input2
  input3
  input4
  totalScore = 0
  sliderVal1 = 10
  currentScore
  targetScore
  totalScoreP
  totalScoreB
  msg

  quantScoreInputCG
  quantScoreInputTG
  verbalScoreInputCG
  verbalScoreInputTG
  color = 'accent'
  mode = 'buffer'
  show = false
  totalScoreStyle = '0%'
  currentScoreStyle = '100%'
  quantScoreInputTStyle = '0%'
  quantScoreInputCStyle = '100%'
  verbalScoreInputCStyle = '0%'
  verbalScoreInputTtyle = '100%'

  constructor () {}

  ngOnInit () {}

  Submit () {
    if (
      parseInt(this.input1) > 0 &&
      parseInt(this.input2) > 0 &&
      parseInt(this.input3) > 0 &&
      parseInt(this.input4) > 0 &&
      parseInt(this.input1) <= 60 &&
      parseInt(this.input2) <= 60 &&
      parseInt(this.input3) <= 60 &&
      parseInt(this.input4) <= 60
    ) {
      this.quantScoreInputC = this.input1
      this.quantScoreInputT = this.input2
      this.verbalScoreInputC = this.input3
      this.verbalScoreInputT = this.input4
      console.log('hit')
      console.log(
        parseInt(this.quantScoreInputC) > 0 &&
          parseInt(this.quantScoreInputT) > 0 &&
          parseInt(this.verbalScoreInputC) > 0 &&
          parseInt(this.verbalScoreInputT) > 0 &&
          parseInt(this.quantScoreInputC) <= 60 &&
          parseInt(this.quantScoreInputT) <= 60 &&
          parseInt(this.verbalScoreInputC) <= 60 &&
          parseInt(this.verbalScoreInputT) <= 60
      )
      if (
        parseInt(this.quantScoreInputC) > 0 &&
        parseInt(this.quantScoreInputT) > 0 &&
        parseInt(this.verbalScoreInputC) > 0 &&
        parseInt(this.verbalScoreInputT) > 0 &&
        parseInt(this.quantScoreInputC) <= 60 &&
        parseInt(this.quantScoreInputT) <= 60 &&
        parseInt(this.verbalScoreInputC) <= 60 &&
        parseInt(this.verbalScoreInputT) <= 60
      ) {
        console.log(
          this.quantScoreInputC,
          this.quantScoreInputT,
          this.verbalScoreInputC,
          this.verbalScoreInputT
        )
        this.msg = ''
        this.totalScore =
          parseInt(this.quantScoreInputC) +
          parseInt(this.quantScoreInputT) +
          parseInt(this.verbalScoreInputC) +
          parseInt(this.verbalScoreInputT)
        this.currentScore =
          200 +
          (parseInt(this.verbalScoreInputC) + parseInt(this.quantScoreInputC)) *
            5
        this.targetScore =
          200 +
          (parseInt(this.verbalScoreInputT) + parseInt(this.quantScoreInputT)) *
            5

        console.log('Curent score', this.currentScore)
        console.log('targer Score', this.targetScore)
        this.totalScoreP = this.currentScore / 8
        this.totalScoreB = this.targetScore / 8
        this.quantScoreInputCG = parseInt(this.quantScoreInputC) * 1.667
        this.quantScoreInputTG = parseInt(this.quantScoreInputT) * 1.667
        this.verbalScoreInputCG = parseInt(this.verbalScoreInputC) * 1.667
        this.verbalScoreInputTG = parseInt(this.verbalScoreInputT) * 1.667
        this.show = true
        this.totalScoreStyle = this.totalScoreP + '%'
        this.currentScoreStyle = this.totalScoreB + '%'
        this.quantScoreInputTStyle = this.quantScoreInputCG + '%'
        this.quantScoreInputCStyle = this.quantScoreInputTG + '%'
        this.verbalScoreInputCStyle = this.verbalScoreInputCG + '%'
        this.verbalScoreInputTtyle = this.verbalScoreInputTG + '%'
        this.input1 = ''
        this.input2 = ''
        this.input3 = ''
        this.input4 = ''
      }
      {
        //  this.show = false;
        this.msg ='Please fill the fields carefully value must be within 0 to 60'
      }
    } else {
      this.msg = 'Please fill the fields carefully value must be within 0 to 60'
    }
  }

  closeAll () {
    this.show = false
    this.msg = ''
  }

  //currentScore = 200+ (c v s + cqs) * 5

  //  targerScore = 200 + (tvs + tqs) * 5
}
