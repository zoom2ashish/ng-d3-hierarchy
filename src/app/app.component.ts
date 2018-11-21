import { Component, OnInit } from '@angular/core';
import { data } from './data';
import { tree, hierarchy, TreeLayout, HierarchyPointNode, HierarchyPointLink, HierarchyNode, HierarchyLink } from 'd3-hierarchy';
import { Margin, DataModel } from './models';
import { linkHorizontal } from 'd3-shape';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-d3-hierarchy';

  width = 500;
  height = 500;
  margin: Margin = { top: 20, bottom: 20, left: 20, right: 20 };
  treeLayout: TreeLayout<DataModel>;
  root: HierarchyNode<DataModel>;
  nodes: HierarchyNode<DataModel>[];
  links: HierarchyLink<DataModel>[];

  constructor() {
  }

  ngOnInit(): void {
    this.populate();
  }

  populate() {
    const root: any = hierarchy<DataModel>(data, (d) => {
      return d.isCollapsed ? null : d.children;
    });

    (<any>root).dx = 10;
    (<any>root).dy = this.width / (root.height + 1);
    this.root = tree<DataModel>().size([this.height, this.width])(root);

    // Compute New Tree Layout
    this.nodes = this.root.descendants();
    this.links = this.root.links(); // Revisit this with treeData.links()

    this.nodes.forEach((d: any) => {
      d.y = d.depth * 180;
    });
  }

  getLinkPath(link: HierarchyLink<any>) {
    const path = linkHorizontal<any, any>().x(d => {
      return d.y;
    }).y(d => {
      return d.x;
    })(link);
    return path;
  }

  toggleExpandCollapse(node: HierarchyNode<DataModel>) {
    node.data.isCollapsed = !node.data.isCollapsed;
    this.populate();
  }
}
