var images = ["https://i.postimg.cc/MKdhy06Z/family.jpg","https://i.postimg.cc/L6HcYQM0/grand-father.png", "https://i.postimg.cc/wjMnFtMX/father.jpg" ,"https://media.istockphoto.com/id/1318886224/vector/indian-woman-mother-and-child-mom-hugging-her-daughter-with-a-lot-of-love-and-tenderness.jpg?s=612x612&w=0&k=20&c=TJfHUX9FugJOSl7FTeHWgDkVRAi-_e2elUn9P1VlL5k=", "https://img.freepik.com/premium-vector/cute-grandmother-cartoon-standing-bring-stick_43633-12247.jpg?w=2000","https://c8.alamy.com/zooms/9/c805ded9621d4fe19f6983e029d26d0c/r6gkh7.jpg"];

var names = ["Family Book","DISH KUMAR ARORA - Grandfather", "PUNNET ARORA - Father", "NISHA ARORA- Mother", "NEELAM ARORA - GRAND MOTHER" ,"BHURU-PET DOG"];

var age = [  ,60, 40, 36, 50, 13]

/*

We must sort the elements present inside the array "age" to print the age value of the family member for the respective family member.

Write: "age.sort()"

*/

age.sort()   ;

/*

We must reverse the elements present inside the array "age" to print the age value of the family member for the respective family member.
After sorting the array "age", all the elements must be arranged in an ascending manner and our family book consists of the exact opposite list i.e. all the first member is Grandfather followed by father and so on ie. in the decending manner.

Write: "age.reverse()"

*/
age.reverse();

var i = 0;

function update()
{
    i++;

    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    
    var updatedImage = images[i];

    var updatedName  = names[i];
    
    var updatedAge = age[i]

    document.getElementById("family_member_image").src = updatedImage;
    
    document.getElementById("family_member_name").innerHTML = updatedName;

    document.getElementById("family_member_age").innerHTML = updatedAge;

    /*

    To find the maximum age value amongst the family members, we need to use the Math, and the max function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var max_number = Math.max.apply(Math, age)
            "console.log("The highest age is: ", max_number)"

    */

    var max_number = Math.apply(Math, );
    console.log("The highest age is: ", max_number);

    /*

    To find the minimum age value amongst the family members, we need to use the Math, and the min function together and to display the maximum age, we need print the value. Thus make use of console.

    Write:  "var min_number = Math.min.apply(Math, age)
            "console.log("The lowest age is: ", min_number)"

    */

    var min_number = Math.apply(Math,  );
    console.log("The lowest age is: ",min_number);
}