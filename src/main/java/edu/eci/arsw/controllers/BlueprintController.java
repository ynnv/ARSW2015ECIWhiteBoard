/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package edu.eci.arsw.controllers;

import edu.eci.arsw.model.Blueprint;
import edu.eci.arsw.services.ServicesFacade;
import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author hcadavid
 */
@RestController
@RequestMapping("/blueprints")
public class BlueprintController {
    
    @Autowired
    ServicesFacade services;
    
    
    @RequestMapping(value="/check",method = RequestMethod.GET)        
    public String check() {
        return "REST API OK";        
    }
    
    @RequestMapping(method = RequestMethod.POST)        
    public ResponseEntity<?> addBlueprint(@RequestBody Blueprint p) {       
        services.addNewBlueprint(p.getName(),p);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }

    
    @RequestMapping(method = RequestMethod.GET)
    public Set<String> allBlueprintNames() {       
        return services.getBlueprintNames();
    }
    
    @RequestMapping(value = "/{blueprintname}",method = RequestMethod.GET)        
    public Blueprint getABlueprint(@PathVariable("blueprintname") String blueprintname) {       
        return services.getBlueprintByName(blueprintname);
    }    
}

