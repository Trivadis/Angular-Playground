import { Employee } from './../../models/employee.model';
import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: 'employee-form.component.html',
  styleUrls: ['employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent implements OnInit, OnChanges {
  @Input() employee: Employee;

  @Output() create = new EventEmitter<Employee>();
  @Output() update = new EventEmitter<Employee>();
  @Output() remove = new EventEmitter<Employee>();

  form: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required]
  });
  isEdit = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {
    if (this.employee && this.employee.id) {
      this.isEdit = true;
      this.form.patchValue(this.employee);
    }
  }

  get firstname() {
    return this.form.get('firstname');
  }
  get lastname() {
    return this.form.get('lastname');
  }

  createEmployee() {
    if (this.form.valid) {
      this.create.emit(this.form.value);
    }
  }

  updateEmployee() {
    if (this.form.touched && this.form.valid) {
      this.update.emit({ ...this.employee, ...this.form.value });
    }
  }

  removeEmployee() {
    this.remove.emit({ ...this.employee, ...this.form.value });
  }
}
