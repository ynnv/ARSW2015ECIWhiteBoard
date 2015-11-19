
package edu.eci.arsw.model;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


public class Blueprint {

    private List<Point> points=null;
    
    String name=null;
    
    public Blueprint(String name,Point[] pnts){
        this.name=name;
        points=Arrays.asList(pnts);
    }
          
    public Blueprint(String name){
        this.name=name;
        points=new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    
    
    public List<Point> getPoints() {
        return points;
    }
    
    public void addPoint(Point p){
        this.points.add(p);
    }
    
}
