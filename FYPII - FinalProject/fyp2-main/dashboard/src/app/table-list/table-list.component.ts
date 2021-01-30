import { Component, OnInit } from "@angular/core";
import { AppService } from "../services/app-service.service";
import { MatIconModule } from "@angular/material/icon";

@Component({
	selector: "app-table-list",
	templateUrl: "./table-list.component.html",
	styleUrls: ["./table-list.component.css"],
})
export class TableListComponent implements OnInit {
	cases: any[] = [];
	constructor(private as: AppService) {}
	onDeleteCase = (id) => {
		console.log(id);
		this.as.deleteCase(id).subscribe(
			(res) => {
				console.log("Here", res);
			},
			(err) => {
				let temp = this.cases.filter((obj) => id !== obj._id);
				console.log(temp);
				this.cases = temp;
				console.log("Error While Deleting", err);
			}
		);
	};
	onAcceptCase = (id, index) => {
		this.as.acceptCase(id).subscribe(
			(res) => {
				this.cases[index].isAccept = true;
			},
			(err) => {
				console.log(err);
			}
		);
	};
	onRejectCase = (id, index) => {
		this.as.rejectCase(id).subscribe(
			(res) => {
				this.cases[index].isAccept = false;
			},
			(err) => {
				console.log(err);
			}
		);
	};

	ngOnInit() {
		this.as.getCases().subscribe(
			(res) => {
				console.log(res.cases);
				this.cases = res.cases;
			},
			(err) => {
				console.log(err);
			}
		);
	}
}
