/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.services;

import edu.eci.arsw.model.Blueprint;
import edu.eci.arsw.model.Point;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Set;
import org.springframework.stereotype.Service;

/**
 *
 * @author hcadavid
 */
@Service
public class ServicesFacade {
   
    private static final Map<String,Blueprint> dummyBluePrints=new LinkedHashMap<>();
    
    static{
        dummyBluePrints.put("larecta", new Blueprint("larecta",new Point[]{new Point(50,50),new Point(200,200)}));
        dummyBluePrints.put("rayon",new Blueprint("rayon",new Point[]{new Point(20,20),
                                                      new Point(300,300),
                                                      new Point(450,550)
        }));
        dummyBluePrints.put("poligono1",new Blueprint("poligono1",new Point[]{new Point(150,150),
                                                      new Point(50,200),
                                                      new Point(150,300),
                                                      new Point(200,200),
                                                      new Point(150,150),
        }));    
    }
    
    public void addNewBlueprint(String name,Blueprint bp){
        dummyBluePrints.put(name,bp);
    }
    
    public Set<String> getBlueprintNames(){
        return dummyBluePrints.keySet();
    }
    
    public Blueprint getBlueprintByName(String name){
        return dummyBluePrints.get(name);
    }
    
}
