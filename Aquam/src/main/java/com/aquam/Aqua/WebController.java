package com.aquam.Aqua;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping("/shop")
    public String shopPage() {
        return "Shop"; // Asegúrate de que existe Shop.html en templates/
    }

}
